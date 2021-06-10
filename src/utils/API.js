/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const URL = "https://api.github.com/search/repositories?q=";
const query = "twitter+politics";
const language = "javascript";
const order = "desc";

export default {
  getRepo: function () {
    return axios.get(
      `${URL + query}+language:${language}&sort=stars&order=${order}`
    );
  },
};
