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
          backgroundAttachment: "scroll"
        }}
      >
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
