import Head from "next/head";
import CurrentRates from "../components/CurrentRates/CurrentRates";
import fetch from "isomorphic-unfetch";
import { useEffect } from "react";

const borsaAnlik = () => {
  useEffect(() => {
    fetch("http://localhost:5000/api/haberler/urls")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          console.log(
            `<url><loc>https://kriptomatik.org/haberler/${item.url}/</loc></url>`
          );
        });
      });
  }, []);
  return (
    <>
      <Head>
        <title>
          Kripto para son durum, sanal para canlı borsa -Kriptomatik
        </title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Kripto para son durum, alt coin borsası, dijital para borsası, sanal para canlı
          borsa"
        />
      </Head>
      <CurrentRates />
    </>
  );
};

export default borsaAnlik;
