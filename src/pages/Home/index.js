import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches";
import { useGifs } from "../../hooks/useGifs";


export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, setPath] = useLocation()
    const {loading, gifs} = useGifs();

    const handleSubmit = evt => {
        evt.preventDefault()
        // Navegar a otra ruta
        setPath(`/search/${keyword}`)
        console.log(keyword)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif..." onChange={handleChange} type="text" value={keyword}></input>
            </form>
            <h3 className="App-title">Ultima busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <div className="list">
                <TrendingSearches ></TrendingSearches>
            </div>
        </>
    )
}