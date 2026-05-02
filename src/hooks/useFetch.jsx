import { useEffect, useState } from 'react';

const useFetch = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('/appData.json')
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    setApps(data)
                })
        }, 500);
    }, [])

    return { apps, loading }
};

export default useFetch;