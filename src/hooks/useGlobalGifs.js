import React, {useContext} from "react";
import GifContext from '../context/GifsContext'

export default function useGlobalGifs() {
    const {gifs} = useContext(GifContext)
    return gifs
}