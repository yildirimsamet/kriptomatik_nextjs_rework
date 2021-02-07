import { useEffect, useState } from "react";

function TopRates() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => res.json())
      .then((res) => {
        setCoins(res.data);
      });
  }, []);
  return (
    <div className="top-rates">
      <div className="container dflex align-items-center bg-color2 top-rates-container">
        <div className="top-rates-right fontWMedium">Altcoin Fiyatları :</div>
        <div className="top-rates-mid">
          <div className="top-rates-mid-inner">
            {coins.map((coin, index) => {
              return (
                <div key={index} className="top-rates-mid-single-rate color4">
                  {coin.symbol + " "} <b>{"$" + coin.price_usd}</b>{" "}
                  <i
                    className={
                      coin.percent_change_1h > 0 ? "arrow up" : "arrow down"
                    }
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
        <div className="top-rates-left">
          <a
            className="btn btn-small bg-color1 color4"
            href="https://accounts.binance.com/tr/register?ref=28995153"
          >
            AL/SAT
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopRates;
