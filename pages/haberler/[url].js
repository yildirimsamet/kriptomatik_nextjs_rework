import Head from "next/head";
import Post from "../../components/Post/Post";
import fetch from "isomorphic-unfetch";
import { URL } from "../../environment";
import { useRouter } from "next/router";
import { useEffect } from "react";

const newsSpesificUrl = ({ data }) => {
  const router = useRouter();
  const { url } = router.query;
  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/findbyurlNupdatevisited", {
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
    return (
      <>
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
      </>
    );
  } else {
    return <h1>Sayfa bulunamadı</h1>;
  }
};

export async function getStaticPaths() {
  const res = await fetch(`${URL}/api/haberler/urls`);
  const urls = await res.json();
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
  const res = await fetch(`${URL}/api/haberler/findbyurl/${ctx.params.url}`);
  const data = await res.json();

  return {
    props: { data: data[0] },
  };
};

export default newsSpesificUrl;
