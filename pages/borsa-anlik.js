import Head from "next/head";
import CurrentRates from "../components/CurrentRates/CurrentRates";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const borsaAnlik = () => {
  const [coinss, setCoinss] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => res.json())
      .then((res) => {
        setCoinss(res.data);
        setLoading(false);
      });

    if (typeof window !== "undefined") {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    return () => {
      return;
    };
  }, []);
  return (
    <>
      <Head>
        <script
          data-ad-client="ca-pub-2743431608715099"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
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
      {loading ? <Loader /> : <CurrentRates coinss={coinss} />}
    </>
  );
};
// export const getServerSideProps = async () => {
//   const res = await fetch("https://api.coinlore.net/api/tickers/");
//   const data = await res.json();
//   return {
//     props: {
//       coinss: data.data,
//     },
//   };
// };
export default borsaAnlik;
