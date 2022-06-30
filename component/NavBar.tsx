import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import sgcuLogo from "../public/assets/sgcu-logo.svg";

export default function NavBar() {
  return (
    <>
      <Stack
        sx={{
          height: "80px",
          width: "100vw",
          flexDirection: "row",
          paddingLeft: { xs: "28px", lg: "160px" },
          backgroundColor: "white",
          position: "fixed",
          zIndex: "2"
          //   alignContent: "center"
        }}
      >
        <Image src={sgcuLogo} alt="Sgcu Logo"></Image>
        <Typography
          sx={{
            width: "115px",
            height: "36px",

            fontFamily: "Prompt",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "36px",
            alignSelf: "center",
            ml: "31px",
            color: "#DE5C8E"
          }}
        >
          ISD SGCU
        </Typography>

        <Button
          sx={{
            width: { xs: "50px", lg: "70px" },
            height: "36px",
            alignSelf: "center",
            ml: { xs: "15px", lg: "40px" },
            color: "#DE5C8E"
          }}
          href="/"
        >
          <Typography
            sx={{
              fontFamily: "Prompt",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: { xs: "14px", lg: "17px" },
              lineHeight: "36px",
              color: "#DE5C8E",
              transition: "0.2s",
              ":hover": {
                fontSize: { xs: "17px", lg: "20px" },
                textDecoration: "underline"
              }
            }}
          >
            HOME
          </Typography>
        </Button>
        <Button
          sx={{
            width: { xs: "110px", lg: "120px" },
            height: "36px",
            alignSelf: "center",
            ml: { xs: "5px", lg: "10px" },
            color: "#DE5C8E"
          }}
          href="/register"
        >
          <Typography
            sx={{
              fontFamily: "Prompt",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: { xs: "14px", lg: "17px" },
              lineHeight: "36px",
              color: "#DE5C8E",
              transition: "0.2s",
              ":hover": {
                fontSize: { xs: "17px", lg: "20px" },
                textDecoration: "underline"
              }
            }}
          >
            name list
          </Typography>
        </Button>
      </Stack>
    </>
  );
}
