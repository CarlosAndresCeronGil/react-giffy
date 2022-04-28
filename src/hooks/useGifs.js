import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContex from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const[loadingNextPage, setLoadingNextPage] = useState(false)
  const[page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContex)

  /*Esto es lo mismo que colocar:
  const keywordTouse = keyword ? keyword : localStorage.getItem('lastkeyword')*/
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(
    function () {
      setLoading(true);

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
    },
    [keyword, keywordToUse, setGifs]
  );

  useEffect(function() {
    if(page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({keyword: keywordToUse, page})
    .then(nextGifs => {
      //Esto no lo entendi :/
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [keywordToUse, page, setGifs])


  return { loading, loadingNextPage, gifs, setPage };
}
