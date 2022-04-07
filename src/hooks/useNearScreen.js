import { useState, useEffect } from "react"

export default function useNearScreen({elementRef}) {
    const [show, setShow] = useState(false)
    
    useEffect(function() {
        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log(el.isIntersecting)
            if(el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return show
}