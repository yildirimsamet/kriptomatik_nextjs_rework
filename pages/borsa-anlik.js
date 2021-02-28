import Head from "next/head";
import CurrentRates from "../components/CurrentRates/CurrentRates";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import AdBanner from "../components/AdBanner/AdBanner";

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
    setTimeout(() => {
      Array.from(document.getElementsByClassName("gizli")).forEach((item) => {
        item.style.display = "none";
      });
    }, 15);
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

      <h1 className="gizli">
        Kripto para son durum, sanal para canlı borsa ve dijital para borsası
      </h1>
      <p className="gizli">
        Kripto para son durum, alt coin borsası, dijital para borsası, sanal
        para canlı borsa son dakika coin kripto para
      </p>
      {/* {loading ? (
        <Loader text="YÜKLENİYOR..." />
      ) : (
        )} */}
      <CurrentRates />
    </>
  );
};

export default borsaAnlik;
