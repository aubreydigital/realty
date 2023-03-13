import axios from 'axios';

export const baseUrl = 'https://api.gateway.attomdata.com'

export async function fetchData(url) {
    const response = await axios.get(url, {
        headers: {
            'apikey': '3890a8d8c43a38324444e0093a88f805'
        }
    });
    return response.data;
  }
