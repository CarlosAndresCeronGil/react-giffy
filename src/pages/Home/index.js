import React, { useCallback, useState } from "react";
import Helmet from "react-helmet";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import SearchForm from "../../components/SearchForm";
import TrendingSearches from "../../components/TrendingSearches";
import { useGifs } from "../../hooks/useGifs";

export default function Home() {
    const [path, setPath] = useLocation()
    const {loading, gifs} = useGifs();

    const handleSubmit = useCallback(({keyword})=> {
        // Navegar a otra ruta
        setPath(`/search/${keyword}`)
        console.log(keyword)
    }, [setPath])

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit}></SearchForm>
            <h3 className="App-title">Ultima busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <div className="list">
                <TrendingSearches ></TrendingSearches>
            </div>
        </>
    )
}