import React, { useEffect, useState } from "react";
import moment from "moment";
import { getData } from "../functions/functions";

const Info = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);

  let url = "https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=8";

  useEffect(() => {
    getData(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  function handleSearch(e) {
    e.preventDefault();
    if (filterTerm === "") {
      getData(url).then((res) => {
        setResponse(res.data);
      });
    } else
      setResponse(
        response?.filter(
          (response) => response.id.toString().indexOf(filterTerm) > -1
        )
      );
    setFilterTerm("");
  }

  return (
    <div className="">
      {error ? (
        <h2>There has been same error...</h2>
      ) : (
        <div className="info_table">
          <div className="filterContainer">
            <h1>Recent Trades List</h1>

            <form className="filter_area" onSubmit={handleSearch}>
              <input
                onChange={(e) => setFilterTerm(e.target.value)}
                type="text"
                value={filterTerm}
                className="filter_input"
              />
              <button type="submit" className="filter_button">
                Filter
              </button>
            </form>
          </div>
          <div>
            <div>
              <div className="tablehead">
                <p>ID</p>
                <p>PRICE</p>
                <p>QTY</p>
                <p>QUOTEQTY</p>
                <p>TIME</p>
              </div>
            </div>

            <div className="data_body">
              {response?.map((filtered, index) => (
                <div key={index} className="data_rows">
                  <p id="id_data">#{filtered.id}</p>
                  <p>{parseInt(filtered.price)} $</p>
                  <p>{filtered.qty}</p>
                  <p>{filtered.quoteQty}</p>
                  <p>{moment(filtered.time).format("YYYY-MM-DD HH:mm:ss")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
