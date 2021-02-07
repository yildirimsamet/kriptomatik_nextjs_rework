import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function CurrentRates({ coinss }) {
  const [coins, setCoins] = useState(coinss);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [coins]);

  return (
    <div id="current-rates">
      <div className="current-rates-sablon">
        <h1>Kripto Para Canlı</h1>
        <div className="single-coin-properties-title">
          <p className="single-coin-prop-title">Fiyat</p>
          <p className="single-coin-prop-title">BTC fiyat</p>
          <p className="single-coin-prop-title">1s Değişim</p>
          <p className="single-coin-prop-title">24s Değişim</p>
          <p className="single-coin-prop-title">7g Değişim</p>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="loading">
            <Loader />
          </div>
        ) : (
          <div>
            {coins.map((coin) => {
              return (
                <div key={coin.id} className="single-currency">
                  <h2>
                    {coin.name} <br /> ({coin.symbol}):
                  </h2>
                  <div className="single-coin-properties">
                    <p className="single-coin-prop">{coin.price_usd}$</p>
                    <p className="single-coin-prop">{coin.price_btc}</p>
                    <p className="single-coin-prop">
                      {coin.percent_change_1h}%
                      <span
                        className={
                          coin.percent_change_1h > 0 ? "arrow-up" : "arrow-down"
                        }
                      ></span>
                    </p>
                    <p className="single-coin-prop">
                      {coin.percent_change_24h}%
                      <span
                        className={
                          coin.percent_change_24h > 0
                            ? "arrow-up"
                            : "arrow-down"
                        }
                      ></span>
                    </p>
                    <p className="single-coin-prop">
                      {coin.percent_change_7d}%
                      <span
                        className={
                          coin.percent_change_7d > 0 ? "arrow-up" : "arrow-down"
                        }
                      ></span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentRates;
