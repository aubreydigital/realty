import axios from "axios";

export const baseUrl = 'https://realtor.p.rapidapi.com';

export const fetchAPI = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'realtor.p.rapidapi.com',
      'x-rapidapi-key': 'a64fc701afmshd4f1f8194fc0e83p1e95f6jsnb93e4a95570c',
    },
  });
    
  return data;
}