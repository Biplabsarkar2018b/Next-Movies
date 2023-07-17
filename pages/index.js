import { useEffect } from "react";
import { fetchData } from "./api/movie";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./screens/home";
import { useDispatch } from "react-redux";
import { getApiConfig } from "../store/homeSlice";

export default function Home() {
  const dispatch = useDispatch();
  const apiTesting = async () => {
    fetchData("/configuration")
      .then((response) => {
        const url = {
          backdrop: response?.images?.secure_base_url + "original",
          poster: response?.images?.secure_base_url + "original",
          profile: response?.images?.secure_base_url + "original",
        };
        return url;
      })
      .then((response) => dispatch(getApiConfig(response)));
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return <HomePage />;
}
