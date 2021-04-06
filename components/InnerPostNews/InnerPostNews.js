import { useEffect, useState } from "react";
import styles from "./InnerPostNews.module.css";
import { URL } from "../../environment";
import Link from "next/link";
import AdNewsRecommed from "../AdNewsRecommend/AdNewsRecommed";
import React from "react";
const InnerPostNews = ({ url }) => {
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/haberler/pagination/0`)
      .then((res) => res.json())
      .then((res) => {
        const data = res.filter((item, index) => {
          return item.url !== url;
        });
        const fixedData = data.filter((item, index) => {
          return index < 5;
        });
        setLastNews(fixedData);
      });
  }, [url]);
  return (
    <div className={styles.innerPostNewsWrapper}>
      <h2 className="my-3 text-center">Haberlere Göz Atın</h2>
      {lastNews.map((item, index) => {
        if (index === 2) {
          return (
            <React.Fragment key={Math.random() * 300}>
              <div className="adnewsrecommend">
                <AdNewsRecommed />
              </div>
              <div className={styles.innerSinglePostWrapper}>
                <div className={styles.innerSinglePostImgDiv}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.innerSinglePostImg}
                  />
                </div>

                <div className={styles.innerSinglePostContentWrapper}>
                  <h3 className={styles.innerSinglePostTitle}>{item.title}</h3>
                  <p>
                    <Link href={"/haberler/" + item.url}>
                      <a className={styles.innerSinglePostLink}>Habere git</a>
                    </Link>
                    <span>
                      <img src="/images/eye.png" alt="eye" />{" "}
                      {item.visitedCount}
                    </span>
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={Math.random() * 300}>
            <div className={styles.innerSinglePostWrapper}>
              <div className={styles.innerSinglePostImgDiv}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.innerSinglePostImg}
                />
              </div>

              <div className={styles.innerSinglePostContentWrapper}>
                <h3 className={styles.innerSinglePostTitle}>{item.title}</h3>
                <p>
                  <Link href={"/haberler/" + item.url}>
                    <a className={styles.innerSinglePostLink}>Habere git</a>
                  </Link>
                  <span>
                    <img src="/images/eye.png" alt="eye" /> {item.visitedCount}
                  </span>
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default InnerPostNews;
