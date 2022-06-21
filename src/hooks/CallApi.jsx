import axios from 'axios';
// require('dotenv').config();
import { useState, useEffect } from 'react';

function useCallApi(config) {
  const { baseUrl, path, query } = config;
  const id = config.id || ``;
  const fetchUrl = `${baseUrl}${path}${id}${query.page}${query.limit}`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const controller = new AbortController();
  const { signal } = controller;
  const fetchData = async () => {
    try {
      const response = await axios.get(fetchUrl, {
        signal,
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      if (err.name === 'CanceledError') return;
      setError(err);
      throw err;
    }
  };
  useEffect(() => {
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query.page]);
  return { data, loading, error };
}
export default useCallApi;
