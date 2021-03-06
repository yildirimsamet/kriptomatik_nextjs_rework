import React, { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Head from "next/head";
import { URL } from "../environment";
import AdBanner from "../components/AdBanner/AdBanner";

function Home({ data }) {
  return (
    <div id="home">
      <Head>
        <title>
          Güncel kripto koin haberleri, alt coin borsası -Kriptomatik
        </title>
        <meta
          name="description"
          content="Güncel kripto koin haberleri alt coin haberleri, dijital para haberleri, sanal para canlı haberler."
        />
      </Head>

      <div className="container home-title-container"></div>
      <div className="container dflex justify-content-between home-news-container">
        <div data-aos="fade-right" className="home-left-news">
          <div className="home-small-box">
            {data.map((item, index) => {
              if (index === 1) {
                return (
                  <React.Fragment key={index}>
                    <p className="home-mid-box-category">{item.category}</p>
                    <Link href={"/haberler/" + item.url}>
                      <a className="fontWMedium font-xxsmall">
                        {item.title.length > 60
                          ? item.title.substring(0, 60) + "..."
                          : item.title}
                      </a>
                    </Link>
                    <img src={item.image} alt={item.title} />
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
          <div className="home-small-box">
            {data.map((item, index) => {
              if (index === 2) {
                return (
                  <React.Fragment key={index}>
                    <p className="home-mid-box-category">{item.category}</p>
                    <Link href={"/haberler/" + item.url}>
                      <a className="fontWMedium font-xxsmall">
                        {item.title.length > 60
                          ? item.title.substring(0, 60) + "..."
                          : item.title}
                      </a>
                    </Link>
                    <img src={item.image} alt={item.title} />
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div data-aos="fade-down" className="home-mid-news">
          {data.map((item, index) => {
            if (index === 0) {
              return (
                <React.Fragment key={index}>
                  <p className="home-mid-box-category">{item.category}</p>
                  <Link href={"/haberler/" + item.url}>
                    <a className="fontWMedium font-xxsmall">
                      {item.title.length > 60
                        ? item.title.substring(0, 60) + "..."
                        : item.title}
                    </a>
                  </Link>
                  <img src={item.image} alt={item.title} />
                </React.Fragment>
              );
            }
            return null;
          })}
        </div>
        <div data-aos="fade-left" className="home-right-news">
          <div className="home-small-box">
            {data.map((item, index) => {
              if (index === 3) {
                return (
                  <React.Fragment key={index}>
                    <p className="home-mid-box-category">{item.category}</p>
                    <Link href={"/haberler/" + item.url}>
                      <a className="fontWMedium font-xxsmall">
                        {item.title.length > 60
                          ? item.title.substring(0, 60) + "..."
                          : item.title}
                      </a>
                    </Link>
                    <img src={item.image} alt={item.title} />
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
          <div className="home-small-box">
            {data.map((item, index) => {
              if (index === 4) {
                return (
                  <React.Fragment key={index}>
                    <p className="home-mid-box-category">{item.category}</p>
                    <Link href={"/haberler/" + item.url}>
                      <a className="fontWMedium font-xxsmall">
                        {item.title.length > 60
                          ? item.title.substring(0, 60) + "..."
                          : item.title}
                      </a>
                    </Link>
                    <img src={item.image} alt={item.title} />
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch(`${URL}/api/haberler/firstfiveposts`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};
export default Home;
