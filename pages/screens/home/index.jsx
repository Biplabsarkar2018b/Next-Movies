import Footer from "@/pages/components/footer";
import Header from "@/pages/components/header";
import HeroBanner from "@/pages/components/herobanner";
import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import FilmCarousel from "@/pages/components/carousel/FilmCarousel";
import useFetch from "@/pages/api/hooks/useFetch";
import axios from "axios";
import { fetchData } from "@/pages/api/movie";

const HomePage = () => {
  const [popularMovie, setPopularMovie] = useState(null);
  const [scifiMovies, setScifiMovies] = useState(null);
  const [romanceMovies, setRomanceMovies] = useState(null);
  const [fantasyMovies, setFantasyMovies] = useState(null);
  const { data, loading } = useFetch("/movie/popular");

  useEffect(() => {
    const fetchSciFiMovies = async () => {
      const scifi = await fetchData("/discover/movie", { with_genres: "878" });
      if (scifi) {
        setScifiMovies(scifi.results);
      }
    };

    const fetchRomanceMovies = async () => {
      const romance = await fetchData("/discover/movie", {
        with_genres: "10749",
      });
      if (romance) {
        setRomanceMovies(romance.results);
      }
    };
    const fetchFantasyMovies = async () => {
      const fantasy = await fetchData("/discover/movie", {
        with_genres: "14",
      });
      if (fantasy) {
        setFantasyMovies(fantasy.results);
      }
    };

    if (data) {
      setPopularMovie(data.results);
    }
    fetchSciFiMovies();
    fetchRomanceMovies();
    fetchFantasyMovies();
  }, [data]);

  return (
    <div className="relative">
      <Header />
      <HeroBanner />
      {/* Popular */}
      {popularMovie && (
        <FilmCarousel sectionTitle={"Popular"} data={popularMovie} />
      )}
      {scifiMovies && (
        <FilmCarousel sectionTitle={"Sci-Fi"} data={scifiMovies} />
      )}
      {romanceMovies && (
        <FilmCarousel sectionTitle={"Romantic"} data={romanceMovies} />
      )}
        {fantasyMovies && (
          <FilmCarousel sectionTitle={"Fantasy"} data={fantasyMovies}/>
        )}
      
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
