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
            <h2 className="info_head">Recent Trades List</h2>

            <form className="filter_area" onSubmit={handleSearch}>
              <input
                onChange={(e) => setFilterTerm(e.target.value)}
                type="text"
                value={filterTerm}
                className="filter_input"
              />
              <button type="submit" className="filter_button">
                <p>Filter</p>
              </button>
            </form>
          </div>
          <div classname="table">
            <table id="mytable">
              <tr className="tablehead">
                <td>ID</td>
                <td>PRICE</td>
                <td>QTY</td>
                <td>QUOTEQTY</td>
                <td>TIME</td>
              </tr>

              {response?.map((filtered, index) => (
                <tr key={index} className="data_rows">
                  <td className="id_data">#{filtered.id}</td>
                  <td>{parseInt(filtered.price)} $</td>
                  <td>{filtered.qty}</td>
                  <td>{filtered.quoteQty}</td>
                  <td>{moment(filtered.time).format("YYYY-MM-DD HH:mm:ss")}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
