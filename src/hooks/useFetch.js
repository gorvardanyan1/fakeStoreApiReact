import { useState, useEffect } from 'react'

const useFetch = (url, param, value) => {
    const [state, setState] = useState([])
    url = url + param
    useEffect(function () {
        const timeId = setTimeout(() => {
            fetch(url)
                .then(resp => resp.json())
                .then(response => setState(() => response.filter(elem => elem.price > value.min && elem.price < value.max)))
        }, 1000);
        return () => clearTimeout(timeId)

    }, [url, value])

    return state
}

export default useFetch