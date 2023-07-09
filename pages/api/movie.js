import axios from "axios";

const BASE_URI = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTRhNTRiNDYxNTRlZTdjMGZkNzdlYTY5YmFjMDZkZSIsInN1YiI6IjY0NmU1ODRjNzFmZmRmMDBlNTIxZjU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gmZnZH8F0P9jOmdrMoLVVpGFqe52OUN0NUtbH-fnZIA";

const headers = {
    Authorization:"bearer " + TMDB_TOKEN,
}

export const fetchData = async(url,params)=>{
    try {
        const {data} = await axios.get(BASE_URI + url,{
            headers:headers,
            params:params
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}