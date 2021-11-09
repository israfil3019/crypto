import { useState, useEffect } from "react";
import { getData } from "../functions/functions";

export const useFetch = (url, intVal) => {
  const [response, setResponse] = useState(intVal);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(url)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return { response, error };
};
