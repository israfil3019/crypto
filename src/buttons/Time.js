import moment from "moment";
import { useFetch } from "../hooks/useFetch";

const Time = () => {
  const { response, error } = useFetch(`https://api.binance.com/api/v3/time`);
  return (
    <div className="time_button">
      {error ? (
        <h2>error...</h2>
      ) : (
        <div>
          <h2>{moment(response?.serverTime).format("HH:mm:ss")}</h2>
          <p>Check Server Time</p>
        </div>
      )}
    </div>
  );
};

export default Time;
