import axios from "axios";

const HttpService = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json",
  },
});

export const ShowCharacters = () => {
  return axios.get('https://rickandmortyapi.com/api/character')
};

export default HttpService;
