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
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
