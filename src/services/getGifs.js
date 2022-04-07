import { useState } from "react";
import {API_KEY, API_URL} from './settings'

export default function getGifs({ keyword = 'panda' } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      //Es lo mismo que poner response.data.map
      const gifs = data.map((image) => {
          const {images ,title, id} = image
          const {url} = image.images.downsized_medium
          return { title, id, url }
        });
      return gifs;
    });
}
