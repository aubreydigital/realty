import axios from "axios";

export const baseUrl = 'https://realtor.p.rapidapi.com';

export const fetchAPI = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'realtor.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY,
    },
  });
    
  return data;
}