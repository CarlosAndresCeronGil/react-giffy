import React from "react";
//import index from "../Gif";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword })

  return (
    /*El decodeURIComponent es para mostrar las palabras separadas */
      <div>
        {/* {
          loading ? <Spinner /> : <ListOfGifs gifs={gifs}/>
      } */}
        
        <h3>{decodeURIComponent(keyword)}</h3>
        <ListOfGifs gifs={(gifs)} />
      </div>
  );
}
