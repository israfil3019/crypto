import { useFetch } from "../hooks/useFetch";

const Percent = () => {
    const { response, error } = useFetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT`
      );
      return (
        <div className="percent_button">
          {error ? (
            <h2>error...</h2>
          ) : (
            <div>
                <h2>%{parseInt(response?.priceChangePercent)}</h2>
                <p>Price Change Percent</p>
            </div>
            )
          }
        </div>
      );
    };
    

export default Percent;
