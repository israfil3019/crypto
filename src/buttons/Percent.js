import { useFetch } from "../hooks/useFetch";

const Percent = () => {
    const { response, error } = useFetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT`
      );
      return (
        <div className="percent_button_container">
          {error ? (
            <h2>error...</h2>
          ) : (
            <div className="percent_button">
                <p className='buttons_value'>%{parseInt(response?.priceChangePercent)}</p>
                <br />
                <p className='buttons_name'>Price Change Percent</p>
            </div>
            )
          }
        </div>
      );
    };
    

export default Percent;
