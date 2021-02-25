import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function CurrentRates() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  // const [favCoins, setFavCoins] = useState([]);

  const firstLetterUpperCase = (text) => {
    const firstLetter = text[0].toUpperCase();
    return firstLetter.concat(text.substring(1, text.length));
  };
  function formatMoney(
    amount,
    decimalCount = 2,
    decimal = ".",
    thousands = ","
  ) {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : "")
      );
    } catch (e) {
      console.log(e);
    }
  }
  const grafikImgLink = (text) => {
    const firstIndex = text.indexOf("/images/");
    const lastIndex = text.indexOf("/large/");
    const number = text.substring(firstIndex + 8, lastIndex);

    return `https://www.coingecko.com/coins/${number}/sparkline`;
  };
  const fetchMoreData = async () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&per_page=20&page=${
        page + 1
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        setPage(page + 1);
        setCoins([...coins, ...res]);
      });
  };
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&per_page=20&page=1"
    )
      .then((res) => res.json())
      .then((res) => setCoins(res));
  }, []);
  useEffect(() => {
    const myInterval = setInterval(() => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&per_page=${
          page * 20
        }&page=1`
      )
        .then((res) => res.json())
        .then((res) => setCoins(res));
    }, 5000);

    return () => {
      clearInterval(myInterval);
    };
  }, [page]);

  return (
    <div id="current-rates">
      {/* {favCoins.length > 0 ? (
        <div>
          <h1>Favori coinlerim</h1>
          {favCoins.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : null} */}
      <div className="current-rates-sablon">
        <h1>Kripto Para Canlı</h1>
        <div className="single-coin-properties-title">
          <p className="single-coin-prop-title">Fiyat</p>
          <p className="single-coin-prop-title">24s Değişim</p>
          <p className="single-coin-prop-title">Hacim</p>
          <p className="single-coin-prop-title">Dolaşımdaki Arz</p>
          <p className="single-coin-prop-title">7g Grafik</p>
        </div>
      </div>
      <div>
        {/* {loading ? (
          <div className="loading">
            <Loader />
          </div>
        ) : (
          
        )} */}
        <div>
          <InfiniteScroll
            dataLength={coins.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {coins.map((coin) => {
              return (
                <div
                  key={coin.id}
                  // onClick={() => {
                  //   if (!favCoins.includes(coin.id)) {
                  //     localStorage.setItem("favCoins", `[${coin.id}]`);
                  //     setFavCoins([...favCoins, coin.id]);
                  //   }
                  // }}
                  className="single-currency"
                >
                  <h2>
                    <LazyLoadImage alt="icon" src={coin.image} />
                    {firstLetterUpperCase(coin.id)} <br /> ({coin.symbol}):
                  </h2>
                  <div className="single-coin-properties">
                    <p className="single-coin-prop">
                      ₺{formatMoney(coin.current_price)}
                    </p>
                    <p
                      style={
                        coin.market_cap_change_percentage_24h >= 0
                          ? { color: "green" }
                          : { color: "red" }
                      }
                      className="single-coin-prop"
                    >
                      {coin.market_cap_change_percentage_24h &&
                        coin.market_cap_change_percentage_24h.toFixed(2)}
                      %
                      <span
                        className={
                          coin.market_cap_change_percentage_24h > 0
                            ? "arrow-up"
                            : "arrow-down"
                        }
                      ></span>
                    </p>
                    <p className="single-coin-prop">
                      ₺{formatMoney(coin.total_volume)}
                    </p>
                    <p className="single-coin-prop">
                      {formatMoney(coin.circulating_supply)}
                    </p>
                    <p className="single-coin-prop">
                      <LazyLoadImage
                        alt="grafik"
                        src={grafikImgLink(coin.image)}
                      />
                    </p>
                  </div>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default CurrentRates;
