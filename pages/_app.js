import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Footer.css";
import "../styles/TopRates.css";
import "../styles/WhatsCrypto.css";
import "../styles/Home.css";
import "../styles/News.css";
import "../styles/Post.css";
import "../styles/CurrentRates.css";
import "../styles/Loader.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
