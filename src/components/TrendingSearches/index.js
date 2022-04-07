import React, { useEffect, useRef, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from "../Category";
import useNearScreen from "../../hooks/useNearScreen";

function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(function() {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category title="Tendencias" options={trends}/>
}

export default function LazyTrending() {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({elementRef})

    return <div ref={elementRef}>
        {isNearScreen ? <TrendingSearches /> : null }
    </div>
}