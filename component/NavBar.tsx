import { Box, Stack, Typography } from "@mui/material";
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
          paddingLeft: "160px",
          backgroundColor: "white"
          //   alignContent: "center"
        }}
      >
        <Image src={sgcuLogo} alt="Sgcu Logo"></Image>
        <Typography
          sx={{
            width: "111px",
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
      </Stack>
    </>
  );
}
