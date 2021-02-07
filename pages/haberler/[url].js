import Head from "next/head";
import Post from "../../components/Post/Post";

const newsSpesificUrl = ({ data }) => {
  return (
    <>
      <Head>
        <script
          data-ad-client="ca-pub-2743431608715099"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <title>{data.title}</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content={data.content.substring(0, 99) + "..."}
        />
        <meta name="keywords" content="kripto para, sanal para, dijital para" />
      </Head>
      <Post post={data} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_BASE_URL + "/api/haberler/urls"}`);
  const urls = await res.json();
  return {
    paths: urls.map((url) => {
      return {
        params: { url: url.url },
      };
    }),

    fallback: false,
  };
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(
    `${process.env.API_BASE_URL + "/api/haberler/findbyurl/"}${ctx.params.url}`
  );
  const data = await res.json();
  return {
    props: { data: data[0] },
    revalidate: 100,
  };
};

export default newsSpesificUrl;
