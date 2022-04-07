import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContex from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const {gifs, setGifs} = useContext(GifsContex)
  //const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      /*Esto es lo mismo que colocar:
      const keywordTouse = keyword ? keyword : localStorage.getItem('lastkeyword')*/
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
    },
    [keyword, setGifs]
  );
  return { loading, gifs };
}
