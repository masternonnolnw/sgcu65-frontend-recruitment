import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../component/NavBar";
import styles from "../styles/Home.module.css";
import kite from "../public/assets/kite.png";
import ig from "../public/assets/ig-logo.svg";
import facebook from "../public/assets/fb-logo.svg";
import twitter from "../public/assets/twitter-logo.svg";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { url } from "inspector";
import { useState } from "react";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

const Home: NextPage = () => {
  const inputFieldValues = [
    {
      name: "firstName",
      label: "ชื่อ",
      id: "first-name"
    },
    {
      name: "lastName",
      label: "นามสกุล",
      id: "last-name"
    },
    {
      name: "username",
      label: "ชื่อผู้ใช้",
      id: "username"
    },
    {
      name: "email",
      label: "อีเมล",
      id: "email"
    },
    {
      name: "password",
      label: "รหัสผ่าน",
      id: "password",
      password: true
    },
    {
      name: "confirmPassword",
      label: "ยืนยันรหัสผ่าน",
      id: "confirm-password",
      password: true
    }
  ];

  const initialFormValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    formSubmitted: false,
    success: false
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const [loading, setLoading] = useState(false);

  const [resFromSubmit, setResFromSubmit] = useState("");

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const validate: any = (fieldValues = formValues) => {
    let temp: any = { ...errors };

    if ("firstName" in fieldValues) {
      temp.firstName = fieldValues.firstName ? "" : "This field is required.";
    }

    if ("lastName" in fieldValues) {
      temp.lastName = fieldValues.lastName ? "" : "This field is required.";
    }

    if ("username" in fieldValues) {
      temp.username = fieldValues.username ? "" : "This field is required.";
      if (fieldValues.username) {
        temp.username = /^[A-Za-z0-9]*$/.test(fieldValues.username)
          ? ""
          : "MUST contain only character or number.";
      }
    }

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is NOT valid.";
    }

    if ("password" in fieldValues) {
      temp.password = fieldValues.password ? "" : "This field is required.";
      if (fieldValues.password) {
        if (formValues.confirmPassword)
          temp.confirmPassword =
            formValues.confirmPassword.localeCompare(fieldValues.password) == 0
              ? ""
              : "Passwords do NOT match.";
      }
    }

    if ("confirmPassword" in fieldValues) {
      temp.confirmPassword = fieldValues.confirmPassword
        ? ""
        : "This field is required.";
      if (fieldValues.confirmPassword)
        temp.confirmPassword =
          fieldValues.confirmPassword.localeCompare(formValues.password) == 0
            ? ""
            : "Passwords do NOT match.";
    }

    setErrors({
      ...temp
    });
  };

  const handleInputValue = (e: any) => {
    setResFromSubmit("");

    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    validate({ [name]: value });
  };
  const formIsValid = (fieldValues = formValues) => {
    const isValid =
      fieldValues.firstName &&
      fieldValues.lastName &&
      fieldValues.username &&
      fieldValues.email &&
      fieldValues.password &&
      fieldValues.confirmPassword &&
      resFromSubmit === "" &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (formIsValid()) {
      try {
        const res: any = await axios.post(
          `https://cors-anywhere.herokuapp.com/${baseURL}/users`,
          // `https://api.allorigins.win/raw?url=${baseURL}/users`,
          {
            username: formValues.username,
            name: formValues.firstName,
            surname: formValues.lastName,
            email: formValues.email,
            password: formValues.password
          }
        );
        setLoading(false);
        handleOpenSnackBar();
      } catch (err: any) {
        setLoading(false);
        setResFromSubmit(err.response.data.message[0]);
      }
    }
  };

  return (
    <>
      <Stack sx={{ flexDirection: "row", mt: "80px" }}>
        <Box sx={{ ml: "141px", mt: "122px" }}>
          <Image src={kite} alt="kite image" width={512} height={512} />
        </Box>
        <Box
          sx={{
            width: "380px",
            height: "auto",
            ml: "auto",
            mr: "119px",
            mt: "90px",
            padding: "40px 60px 60px",
            gap: "40px",
            backgroundColor: "white",
            border: "1px solid #DE5C8E",
            borderRadius: "8px",
            flexDirection: "column"
          }}
        >
          <Typography
            sx={{
              width: "215px",
              height: "73px",

              fontFamily: "Prompt",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "47px",
              lineHeight: "73px"
            }}
          >
            ลงทะเบียน
          </Typography>
          <Typography
            sx={{
              width: "168px",
              height: "21px",

              fontFamily: "Prompt",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "21px",
              mb: "9px"
            }}
          >
            กรุณากรอกข้อมูลให้ครบถ้วน
          </Typography>

          <form onSubmit={handleFormSubmit}>
            {inputFieldValues.map((inputFieldValue, index) => {
              return (
                <TextField
                  key={index}
                  id={inputFieldValue.id}
                  label={inputFieldValue.label}
                  name={inputFieldValue.name}
                  onBlur={handleInputValue}
                  onChange={handleInputValue}
                  variant="outlined"
                  size="small"
                  type={
                    inputFieldValue.password
                      ? (index == 4 && showPassword) ||
                        (index == 5 && showConfirmPassword)
                        ? "text"
                        : "password"
                      : "text"
                  }
                  {...(errors[inputFieldValue.name] && {
                    error: true,
                    helperText: errors[inputFieldValue.name]
                  })}
                  InputLabelProps={{
                    style: {
                      fontFamily: "Prompt",
                      fontStyle: "normal",
                      marginTop: "-4px",
                      color: "rgba(180, 180, 180, 1)"
                    }
                  }}
                  InputProps={{
                    endAdornment: inputFieldValue.password ? (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            index == 4
                              ? setShowPassword(!showPassword)
                              : setShowConfirmPassword(!showConfirmPassword);
                          }}
                          edge="end"
                          sx={{ mr: "5px" }}
                        >
                          {(index == 4 && showPassword) ||
                          (index == 5 && showConfirmPassword) ? (
                            <VisibilityOff sx={{ fontSize: "20px" }} />
                          ) : (
                            <Visibility sx={{ fontSize: "20px" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      <></>
                    ),
                    style: {
                      fontFamily: "Prompt",
                      fontStyle: "normal",
                      padding: "0",
                      height: "32px",
                      paddingLeft: "10px"
                    }
                  }}
                  sx={{ mt: "31px", width: "260px" }}
                  // endAdornment={
                  //   inputFieldValue.password ? (
                  // <InputAdornment position="end">
                  //   <IconButton
                  //     onClick={() => {
                  //       index == 4
                  //         ? setShowPassword(!showPassword)
                  //         : setShowConfirmPassword(!showConfirmPassword);
                  //     }}
                  //     edge="end"
                  //   >
                  //     {(index == 4 && showPassword) ||
                  //     (index == 5 && showConfirmPassword) ? (
                  //       <VisibilityOff />
                  //     ) : (
                  //       <Visibility />
                  //     )}
                  //   </IconButton>
                  // </InputAdornment>
                  //   ) : (
                  //     <></>
                  //   )
                  // }
                />
                // <TextField
                //   key={index}
                //   onBlur={handleInputValue}
                //   onChange={handleInputValue}
                //   name={inputFieldValue.name}
                //   label={inputFieldValue.label}
                //   multiline={inputFieldValue.multiline ?? false}
                //   rows={inputFieldValue.rows ?? 1}
                //   autoComplete="none"
                // {...(errors[inputFieldValue.name] && {
                //   error: true,
                //   helperText: errors[inputFieldValue.name]
                // })}
                // />
              );
            })}
            <Typography
              sx={{
                mb: "5px",
                mt: "26px",
                fontFamily: "Prompt",
                fontStyle: "normal",
                fontSize: "13px",
                color: "red"
              }}
            >
              {resFromSubmit ? "*" : ""}
              {resFromSubmit}
            </Typography>
            <LoadingButton
              type="submit"
              loading={loading}
              disabled={!formIsValid()}
              sx={{
                textTransform: "none",
                color: "white",
                backgroundColor: "#DE5C8E",
                width: "100%",
                fontFamily: "Prompt",
                fontStyle: "normal",
                fontWeight: "300",
                "&:hover": {
                  backgroundColor: "#ed4a88"
                }
              }}
            >
              Submit
            </LoadingButton>
          </form>
        </Box>
      </Stack>
      <Stack
        sx={{ mt: "30px", width: "100%", flexDirection: "row", mb: "10px" }}
      >
        <IconButton
          href="https://www.instagram.com/nonnolnw/"
          sx={{ width: "68px", height: "68px", ml: "auto" }}
        >
          <Image src={ig} alt="ig logo" width={48} height={48} />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/nontapan.koro/"
          sx={{ width: "68px", height: "68px" }}
        >
          <Image src={facebook} alt="kite image" width={48} height={48} />
        </IconButton>
        <IconButton
          href="https://twitter.com/"
          sx={{ width: "68px", height: "68px", mr: "102px" }}
        >
          <Image src={twitter} alt="kite image" width={48} height={48} />
        </IconButton>
      </Stack>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Register success.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
