import { useState } from "react";
import {API_KEY, API_URL} from './settings'

export default function getTrendingTerms() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data;
    });
}