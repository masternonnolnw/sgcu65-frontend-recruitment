import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../component/NavBar";
import { Container } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
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
          overflowY: "auto",
          backgroundAttachment: "scroll",
          "&::-webkit-scrollbar": {
            width: "0.5em"
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#fcedf3",
            borderRadius: "20px"
            // width: "15px"
            // outline: "1px solid slategrey"
          }
        }}
      >
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
