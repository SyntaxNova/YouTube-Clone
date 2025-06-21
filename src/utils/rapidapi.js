import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";

const headers = {
  'x-rapidapi-key': API_KEY, 
  'x-rapidapi-host': 'youtube138.p.rapidapi.com',
};

export const fetchData = async (endpoint, params = {}) => {
  try {
    const options = {
      method: 'GET',
      url: `${BASE_URL}/${endpoint}`,
      params,
      headers
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("❌ error fetching API data: ", error);
    throw error;
  }
};
