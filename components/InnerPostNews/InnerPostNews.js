import { useEffect, useState } from "react";
import styles from "./InnerPostNews.module.css";
import { URL } from "../../environment";
import Link from "next/link";

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
        return (
          <div key={index} className={styles.innerSinglePostWrapper}>
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
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InnerPostNews;
