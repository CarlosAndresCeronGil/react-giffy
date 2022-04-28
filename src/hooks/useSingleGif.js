import { useEffect, useState } from "react";
import getSingleGif from "../services/getSingleGif";
import { useGifs } from "./useGifs";


export default function useSingleGif({ id }) {
    const { gifs } = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(function () {
        if(!gif) {
            setLoading(true)
            //Llamar al servicio si no tenemos gif
            getSingleGif({ id })
            .then(gif => {
                setGif(gif)
                setLoading(false)
                setIsError(false)
            }).catch(err => {
                setLoading(false)
                setIsError(true)
            })
        }   
    }, [gif, id])

    return {gif, loading, isError}
}