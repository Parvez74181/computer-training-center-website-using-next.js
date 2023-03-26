import "@/styles/globals.css";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css
import "bootstrap-icons/font/bootstrap-icons.css"; // bootstrap icon css

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
