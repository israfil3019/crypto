import { useFetch } from "../hooks/useFetch";

const Price = () => {
    const { response, error } = useFetch(
        `https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT`
      );
      let dollarUSLocale = Intl.NumberFormat('en-US')
      return (
        <div className="price_button_container">
          {error ? (
            <h2>error...</h2>
          ) : (
            <div className="price_button">
                <p className='buttons_value'>{dollarUSLocale.format(parseInt(response?.price))}</p>
                <br />
                <p className='buttons_name'>Current Average Price</p>
            </div>
            )
          }
        </div>
      );
    };
    

export default Price;
