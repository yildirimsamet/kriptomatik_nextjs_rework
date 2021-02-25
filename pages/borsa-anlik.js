import Head from "next/head";
import CurrentRates from "../components/CurrentRates/CurrentRates";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const borsaAnlik = () => {
  // const [coinss, setCoinss] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://api.coinlore.net/api/tickers/")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setCoinss(res.data);
  //       setLoading(false);
  //     });

  //   return () => {
  //     return;
  //   };
  // }, []);
  return (
    <>
      <Head>
        <title>Kriptomatik | Anlık Coinler</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Canlı kripto para borsasını takip edebilirsiniz. Bitcoin, ethereum, ripple..."
        />
        <meta
          name="keywords"
          content="kripto, kripto para borsası, sanal paralar, sanal para fiyatları, altcoin fiyatları, kripto para canlı, dijital para borsası, son dakika kripto para haberleri"
        />
      </Head>
      {/* {loading ? (
        <Loader text="YÜKLENİYOR..." />
      ) : (
        )} */}
      <CurrentRates />
    </>
  );
};

export default borsaAnlik;
