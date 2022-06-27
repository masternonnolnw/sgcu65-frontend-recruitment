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

const Home: NextPage = () => {
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          // backgroundColor: "black"
          backgroundImage: "url(/assets/bg-desktop.svg)",
          overflowX: "hidden",
          overflowY: "scroll",
          backgroundAttachment: "scroll"
        }}
      >
        <NavBar />
        <Stack sx={{ flexDirection: "row" }}>
          <Box sx={{ ml: "141px", mt: "122px" }}>
            <Image src={kite} alt="kite image" width={512} height={512} />
          </Box>
          <Box
            sx={{
              width: "380px",
              height: "644px",
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
            <TextField
              id="outlined-basic"
              label="ชื่อ"
              variant="outlined"
              size="small"
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
            <TextField
              id="outlined-basic"
              label="นามสกุล"
              variant="outlined"
              size="small"
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
            <TextField
              id="outlined-basic"
              label="ชื่อผู้ใช้"
              variant="outlined"
              size="small"
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
            <TextField
              id="outlined-basic"
              label="อีเมล"
              variant="outlined"
              size="small"
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
            <TextField
              id="outlined-basic"
              label="รหัสผ่าน"
              variant="outlined"
              size="small"
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
            <TextField
              id="outlined-basic"
              label="ยืนยันรหัสผ่าน"
              variant="outlined"
              size="small"
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
            <Button
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
          </Box>
        </Stack>
        <Stack
          sx={{ mt: "70px", width: "100%", flexDirection: "row", mb: "70px" }}
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
      </Container>
    </>
  );
};

export default Home;
