import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e84f7a62c7msh0b5a7729c252f50p199eaejsnb338789cd3b3'
          }
    });
    return data;
}