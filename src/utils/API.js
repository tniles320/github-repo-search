/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const URL = "https://api.github.com/search/repositories?q=";

export default {
  getRepo: function (query, dropdowns) {
    return axios.get(
      `${URL + query}+language:${dropdowns.language}&sort=stars&order=${
        dropdowns.order
      }`
    );
  },
};
