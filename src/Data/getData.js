import {useState, useEffect} from "react";

const GetData = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
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
                setLoading(false)
                setError(true)
                console.log(err.message)
            })
    }, [url])

    return {data, error, loading}
}

export default GetData;