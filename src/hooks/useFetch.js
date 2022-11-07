import { useState, useEffect } from 'react'

const useFetch = (url, attention, value) => {
    const [state, setState] = useState([])
    url = url + attention
    useEffect(function () {
        fetch(url)
            .then(resp => resp.json())
            .then(response => setState(() => response.filter(elem => elem.price > value.min && elem.price < value.max)))
    }, [url, value])
    // setState(() => state.filter(elem => elem.price > value.min && elem.price < value.max))
    return state
}

export default useFetch