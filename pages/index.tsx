import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../component/NavBar";
import styles from "../styles/Home.module.css";
import kite from "../public/assets/kite.png";
import ig from "../public/assets/ig-logo.svg";
import facebook from "../public/assets/fb-logo.svg";
import twitter from "../public/assets/twitter-logo.svg";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { url } from "inspector";
import { useState } from "react";

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
      id: "password"
    },
    {
      name: "confirmPassword",
      label: "ยืนยันรหัสผ่าน",
      id: "confirm-password"
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
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (formIsValid()) {
      // await postContactForm(values);
      alert("You've posted your form!");
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
                  inputProps={{
                    style: {
                      fontFamily: "Prompt",
                      fontStyle: "normal",
                      padding: "0",
                      height: "32px",
                      paddingLeft: "10px"
                    }
                  }}
                  sx={{ mt: "31px", width: "260px" }}
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

            <Button
              type="submit"
              disabled={!formIsValid()}
              sx={{
                textTransform: "none",
                color: "white",
                backgroundColor: "#DE5C8E",
                mt: "31px",
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
            </Button>
          </form>
        </Box>
      </Stack>
      <Stack
        sx={{ mt: "45px", width: "100%", flexDirection: "row", mb: "15px" }}
      >
        <IconButton
          sx={{ width: "68px", height: "68px", ml: "auto", mr: "16px" }}
        >
          <Image src={ig} alt="ig logo" width={48} height={48} />
        </IconButton>
        <IconButton sx={{ width: "68px", height: "68px", mr: "16px" }}>
          <Image src={facebook} alt="kite image" width={48} height={48} />
        </IconButton>
        <IconButton sx={{ width: "68px", height: "68px", mr: "102px" }}>
          <Image src={twitter} alt="kite image" width={48} height={48} />
        </IconButton>
      </Stack>
    </>
  );
};

export default Home;
