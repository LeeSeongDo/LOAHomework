import "../styles/app.css";
import Header from "../src/Commons/Header";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}
