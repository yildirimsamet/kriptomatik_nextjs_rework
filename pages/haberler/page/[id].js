import NewsList from "../../../components/NewsList/NewsList";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { URL } from "../../../environment";

const newsSpesificPage = ({ data, lastPageNumber }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.query.id);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [currentPage]);
  if (data && lastPageNumber) {
    return (
      <>
        <Head>
          <title>Kriptomatik | Haberler</title>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Kripto para haberleri son dakika. Güncel kripto para haberlerini takip edebilirsiniz."
          />
          <meta
            name="keywords"
            content="kripto, kripto para borsası, sanal paralar, sanal para fiyatları, altcoin fiyatları, kripto para canlı, dijital para borsası, son dakika kripto para haberleri"
          />
        </Head>

        <NewsList data={data} />
        <div className="container pagination-container">
          <Link href={(parseInt(currentPage) + -1).toString()}>
            <button
              className="pagination-button"
              disabled={currentPage <= 1 || loading === true ? true : false}
              onClick={() => {
                setLoading(true);
                setCurrentPage(parseInt(currentPage) - 1);
              }}
            >
              {"<<" + " " + (parseInt(currentPage) - 1)}
            </button>
          </Link>
          <button className="pagination-button">{currentPage}</button>
          <Link href={(parseInt(currentPage) + 1).toString()}>
            <button
              className="pagination-button"
              disabled={
                currentPage >= lastPageNumber - 1 || loading === true
                  ? true
                  : false
              }
              onClick={() => {
                setLoading(true);
                setCurrentPage(parseInt(currentPage) + 1);
              }}
            >
              {parseInt(currentPage) + 1 + " " + ">>"}
            </button>
          </Link>
        </div>
      </>
    );
  } else {
    return null;
  }
};
export const getStaticPaths = async (ctx) => {
  let pagesArray = [];
  const res = await fetch(`${URL}/api/haberler/count`);
  const data = await res.json();
  const lastPageNumber = Math.floor(parseInt(parseInt(data.count) / 10));

  for (let i = 1; i < lastPageNumber; i++) {
    pagesArray.push(i);
  }

  const paths = pagesArray.map((page) => {
    return {
      params: { id: page.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (ctx) => {
  const res = await fetch(
    `${URL}/api/haberler/pagination/${(ctx.params.id - 1) * 10}`
  );
  const data = await res.json();
  const res2 = await fetch(`${URL}/api/haberler/count`);
  const count = await res2.json();
  const lastPageNumber = (parseInt(count.count) / 10).toFixed(0);

  return {
    props: {
      data,
      lastPageNumber,
    },
    revalidate: 300,
  };
};

export default newsSpesificPage;
