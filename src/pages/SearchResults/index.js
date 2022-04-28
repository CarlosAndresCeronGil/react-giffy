import React, { useCallback, useEffect, useRef } from "react";
//import index from "../Gif";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import useTitle from '../../hooks/useTitle'
import helmet from 'react-helmet'
import Helmet from "react-helmet";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const elementRef = useRef();
  const isNearScreen = useNearScreen({ elementRef, once: false });
  
  const title = gifs ? `${gifs.length} resultados de ${keyword}`: ''

  useTitle({title: title})
  // console.log(isNearScreen)
  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // const handleNextPage = () => console.log("Next page")

  const debounceHandleNextPage = useCallback(
    debounce(() => 
    setPage((prevPage) => prevPage + 1), 200 //200 milisegundos
    )
  , [setPage]);

  useEffect(function () {
    if (isNearScreen) {
      debounceHandleNextPage();
    }
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    /*El decodeURIComponent es para mostrar las palabras separadas */
    <div>
      {loading ? (
        <p>Cargando. . . </p>
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description"
            content={title} />
          </Helmet>
          <h3>{decodeURIComponent(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={elementRef}></div>
        </>
      )}
    </div>
  );
}
