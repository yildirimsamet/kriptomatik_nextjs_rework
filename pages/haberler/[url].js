import Head from "next/head";
import Post from "../../components/Post/Post";
import fetch from "isomorphic-unfetch";
import { URL } from "../../environment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Url.module.css";
import SingleCoinWidget from "../../components/SingleCoinWidget/SingleCoinWidget";
import InnerPostNews from "../../components/InnerPostNews/InnerPostNews";
import dbConnect from "../../utils/dbConnect";
import News from "../../models/News";

const newsSpesificUrl = ({ data }) => {
  const [coins, setCoins] = useState([]);
  const router = useRouter();
  const { url } = router.query;
  useEffect(() => {
    fetch("https://www.paribu.com/ticker")
      .then((res) => res.json())
      .then((res) => {
        const btc = { ...res.BTC_TL, rank: 1 };
        const eth = { ...res.ETH_TL, rank: 2 };
        const doge = { ...res.DOGE_TL, rank: 14 };
        const myCoins = [btc, eth, doge];
        setCoins(myCoins);
      });

    try {
      fetch("http://localhost:3000/api/findbyurlNupdatevisited", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
    } catch (error) {
      return;
    }
  }, [data]);
  if (data) {
    data = JSON.parse(data);
    return (
      <div className={styles.urlWrapper + " container"}>
        <Head>
          <title>{data.title}</title>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content={data.content.substring(0, 99) + "..."}
          />
          <meta
            name="keywords"
            content="kripto para, sanal para, dijital para"
          />
        </Head>
        <Post post={data} />
        <div className={styles.postAside}>
          <SingleCoinWidget index={0} coin={coins[0]} name={"Bitcoin BTC"} />
          <SingleCoinWidget index={1} coin={coins[1]} name={"Ethereum ETH"} />
          <SingleCoinWidget
            index={2}
            coin={coins[2]}
            name={"Dogecoin DOGE      "}
          />
          <InnerPostNews url={url} />
        </div>
      </div>
    );
  } else {
    return <h1>Sayfa bulunamadı</h1>;
  }
};

export async function getStaticPaths() {
  dbConnect();
  const urls = await News.find({}, { url: 1 });

  // const res = await fetch(`${URL}/api/haberler/urls`);
  // const urls = await res.json();
  return {
    paths: urls.map((item) => {
      return {
        params: { url: item.url },
      };
    }),
    fallback: true,
  };
}

export const getStaticProps = async (ctx) => {
  dbConnect();
  const data = await News.find({ url: ctx.params.url });

  // const res = await fetch(`${URL}/api/haberler/findbyurl/${ctx.params.url}`);
  // const data = await res.json();

  return {
    props: { data: JSON.stringify(data[0]) },
  };
};

export default newsSpesificUrl;
