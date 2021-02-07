import Head from "next/head";
import Post from "../../components/Post/Post";
import fetch from "isomorphic-unfetch";
import { URL } from "../../environment";
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
        <meta charSet="UTF-8" />
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

// export async function getStaticPaths() {
//   const res = await fetch(`${URL}/api/haberler/urls`);
//   const urls = await res.json();
//   return {
//     paths: urls.map((url) => {
//       return {
//         params: { url: url.url },
//       };
//     }),

//     fallback: false,
//   };
// }

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`${URL}/api/haberler/findbyurl/${ctx.params.url}`);

  if (res.status === 200) {
    const data = await res.json();
    return {
      props: { data: data[0] },
    };
  } else {
    return;
  }
};

export default newsSpesificUrl;
