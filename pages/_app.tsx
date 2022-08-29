import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Navigation from "../pages/components/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
