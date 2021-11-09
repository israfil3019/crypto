import { useFetch } from "../hooks/useFetch";

const Price = () => {
    const { response, error } = useFetch(
        `https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT`
      );
      let dollarUSLocale = Intl.NumberFormat('en-US')
      return (
        <div className="price_button">
          {error ? (
            <h2>error...</h2>
          ) : (
            <div>
                <h2>{dollarUSLocale.format(parseInt(response?.price))}</h2>
                <p>Current Average Price</p>
            </div>
            )
          }
        </div>
      );
    };
    

export default Price;
