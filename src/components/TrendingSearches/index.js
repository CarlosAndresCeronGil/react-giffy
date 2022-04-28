import React, { Suspense, useRef } from "react";
import useNearScreen from "../../hooks/useNearScreen";

//Con react.lazy descargara este fichero js solo cuando se le necesite
//Para que funcione bien se agrega el Suspense que aparece abajo en el return
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() {
    const elementRef = useRef() 
    const isNearScreen = useNearScreen({elementRef})

    return <div ref={elementRef}>
        <Suspense fallback={'Estoy cargando . . . '}>
            {isNearScreen ? <TrendingSearches /> : null }
        </Suspense>
    </div>
}