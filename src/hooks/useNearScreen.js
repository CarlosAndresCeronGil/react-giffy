import { useState, useEffect } from "react"

export default function useNearScreen({elementRef, once = true}) {
    const [show, setShow] = useState(false)
    
    useEffect(function() {
        let observer

        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log(el.isIntersecting)
            if(el.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
                //Es lo mismo que escribir:
                // if(once) observer.disconnect()
            }else {
                !once && setShow(false)
                //Es lo mismo que escribir
                // if(!once) setShow(false)
            }
        }

        // Promise.resolve(
        //     typeof IntersectionObserver !== 'undefined'
        //     ? IntersectionObserver
        //     : import('intersection-observer')
        // ).then(() => {
        //      observer = new IntersectionObserver(onChange, {
        //         rootMargin: '100px'
        //     })
        // })

        observer = new IntersectionObserver(onChange, {
                rootMargin: '100px'
        })

        // console.log(elementRef.current)
        if(elementRef.current) observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return show
}