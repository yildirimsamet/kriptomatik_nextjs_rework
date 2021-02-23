import styles from "./SingleCoinWidget.module.css";
const SingleCoinWidget = ({ coin, index, name }) => {
  if (coin) {
    return (
      <div className={styles.singleCoinWidgetWrapper}>
        <div className={styles.singleCoinWidgetTop}>
          <div className={styles.singleCoinWidgetTopImgDiv}>
            <img
              className={styles.singleCoinWidgetImg}
              src={`/images/${index}.png`}
              alt="bitcoin"
            />
          </div>
          <div className={styles.singleCoinWidgetTopTitle}>
            <p>{name}</p>
            <p>
              <strong>₺{coin.last}</strong>{" "}
              <span className={styles.tl}>TL</span>
              <span
                className={
                  coin.percentChange < 0
                    ? styles.singleCoinWidgetRed
                    : styles.singleCoinWidgetGreen
                }
              >
                ({coin.percentChange}%)
              </span>
            </p>
          </div>
        </div>

        <div className={styles.singleCoinWidgetBot}>
          <div className={styles.singleCoinWidgetBotBox}>
            <p>RANK</p>
            <p>
              <strong>{coin.rank}</strong>
            </p>
          </div>
          <div className={styles.singleCoinWidgetBotBox}>
            <p>CHANGE</p>
            <p>
              <strong
                className={
                  coin.change >= 0
                    ? styles.singleCoinWidgetGreen
                    : styles.singleCoinWidgetRed
                }
              >
                ₺{coin.change}
              </strong>
              {/* <span className={styles.tl}>TL</span> */}
            </p>
          </div>
          <div className={styles.singleCoinWidgetBotBox}>
            <p>VOLUME</p>
            <p>
              <strong>{coin.volume.toFixed(0)}</strong>
              <span className={styles.tl}>
                {name.substring(name.length - 4, name.length)}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default SingleCoinWidget;
