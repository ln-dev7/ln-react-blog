import {useState, useEffect} from "react";

const GetData = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const abortController = new AbortController()
        fetch(url, {signal: abortController.signal})
            .then((response) => {
                if (response.ok) {
                    setError(false)
                    return response.json()
                } else {
                    throw Error(
                        'Une erreur s\'est produite ...'
                    );
                    setLoading(false);
                    setError(true);
                }
            })
            .then((data) => {
                setLoading(false)
                setError(false)
                setData(data)
            })
            .catch(err => {
                if (error.name === 'AbortError') {
                    console.log('La requête a été annulée')
                } else {
                    console.log(err)
                }
                setLoading(false)
                setError(true)
                console.log(err.message)
            })
        return () => {
            abortController.abort()
        }
    }, [url])

    return {data, error, loading}
}

export default GetData;