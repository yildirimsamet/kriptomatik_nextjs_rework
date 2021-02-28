import NewsList from "../../../components/NewsList/NewsList";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { URL } from "../../../environment";
import AdBanner from "../../../components/AdBanner/AdBanner";
// import News from "../../../models/News";
// import dbConnect from "../../../utils/dbConnect";

const newsSpesificPage = ({ data, lastPageNumber }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.query.id);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      Array.from(document.getElementsByClassName("gizli")).forEach((item) => {
        item.style.display = "none";
      });
    }, 15);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [currentPage]);
  if (data && lastPageNumber) {
    // data = JSON.parse(data);
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
        {/* <div className="ads-left">
          <AdBanner />
        </div>
        <div className="ads-right">
          <AdBanner />
        </div> */}
        <div className="gizli">
          <h1>
            Kripto para haberleri son dakika. Güncel kripto para haberleri sanal
            para, dijital para son dakika haber
          </h1>
          <p>
            Kripto para haberleri son dakika. Güncel kripto para haberlerini
            takip edebilirsiniz, kripto para borsası, sanal paralar, sanal para
            fiyatları, altcoin fiyatları, kripto para canlı, dijital para
            borsası, son dakika kripto para haberleri
          </p>
        </div>
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
  // dbConnect();
  // let pagesArray = [];
  // const count = await News.find({}).countDocuments();

  // const lastPageNumber = Math.floor((parseInt(count) / 10).toFixed(0));
  // for (let i = 1; i < lastPageNumber; i++) {
  //   pagesArray.push(i);
  // }
  // const paths = pagesArray.map((page) => {
  //   return {
  //     params: { id: page.toString() },
  //   };
  // });

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
  // dbConnect();
  // if (ctx.params.id == 0) {
  //   ctx.params.id = 1;
  // }
  // const data = await News.find({})
  //   .sort({ id: -1 })
  //   .skip((parseInt(ctx.params.id) - 1) * 10)
  //   .limit(10);

  // const count = await News.find({}).countDocuments();

  // const lastPageNumber = (parseInt(count) / 10).toFixed(0);

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
