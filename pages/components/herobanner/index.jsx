import useFetch from "@/pages/api/hooks/useFetch";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Img from "../lazyload/img";

const HeroBanner = () => {
  const { url } = useSelector((state) => state.home);
  const router = useRouter();
  const [background, setbackground] = useState("");
  const [query, setquery] = useState("");

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  const searchInputHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      router.push(`/screens/search/${query}`);
    }
  };
  return (
    <div className="flex w-full m-auto h-[350px] md:h-[500px] bg-black justify-center items-center relative">
      {!loading && (
        <div className="w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden">
          <Img className={"w-full h-full object-cover"} src={background} />
        </div>
      )}
      <div
        className="w-full h-20 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-#04152d"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%)",
        }}
      ></div>
      <div className="absolute flex flex-col items-center">
        <h1 className="text-center text-4xl font-semibold">Welcome.</h1>
        <h1 className="text-center text-lg">
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>

        <div className="rounded-full flex justify-center overflow-hidden mt-4">
          <input
            type="text"
            onChange={(e) => setquery(e.target.value)}
            onKeyDown={(event) => searchInputHandler(event)}
            className="rounded-l-full focus:border-none focus:outline-none text-black min-w-[20rem] p-2 pl-5 placeholder-black placeholder:text-[12px]"
            placeholder="Search for a movie or tv show...."
          />
          <button className="max-w-sm bg-gradient-to-r from-orange-400 to-orange-800 p-2 rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
