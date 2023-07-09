const { useState, useEffect } = require("react");
const { fetchData } = require("../movie");

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setloading("Loading....");
    setdata(null);
    seterror(null);

    fetchData(url)
      .then((response) => {
        setloading(false);
        setdata(response);
      })
      .catch((error) => {
        setloading(false);
        seterror("Something is Wrong!");
      });
  }, [url]);

  return {data,loading,error};
};

export default useFetch;
