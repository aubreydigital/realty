import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchAPI = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a64fc701afmshd4f1f8194fc0e83p1e95f6jsnb93e4a95570c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        }) 

    return data;
}