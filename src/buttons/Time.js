import moment from "moment";
import { useFetch } from "../hooks/useFetch";

const Time = () => {
  const { response, error } = useFetch(`https://api.binance.com/api/v3/time`);
  return (
    <div className="time_button_container">
      {error ? (
        <h2>error...</h2>
      ) : (
        <div className="time_button">
          <p className='buttons_value'>{moment(response?.serverTime).format("HH:mm:ss")}</p>
          <br />
          <p className='buttons_name'>Check Server Time</p>
        </div>
      )}
    </div>
  );
};

export default Time;
