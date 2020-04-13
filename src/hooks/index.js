import { useState, useEffect } from 'react'

export const useFetchLists = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        if (localStorage.getItem('nyt')) {
            setData(JSON.parse(localStorage.getItem('nyt')))
        } else {
            fetch('/api/nyt/lists')
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    localStorage.setItem('nyt', JSON.stringify(result))
                })
        }
    }, [])

    return data;
}

export const useFetchCategories = (name) => {
    const [data, setData] = useState({})
    const api = '/api/nyt/categories/'+ name

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
    }, [])

    return data;
}

