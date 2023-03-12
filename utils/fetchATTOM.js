import axios from 'axios';

export const baseUrl = 'https://api.gateway.attomdata.com/'

export const fetchAPI = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '3890a8d8c43a38324444e0093a88f805',
            'X-RapidAPI-Host': 'api.gateway.attomdata.com/'
          }
        }) 

    return data;
}