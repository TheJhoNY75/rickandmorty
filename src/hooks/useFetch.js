import {useState, useEffect} from 'react';

export default function uneFetch(url, Option){
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async ()=>{
            try{
                const res = await fetch(url, options);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            }catch(err){
                
                setLoading(false);
            }
        })
    }, [])
    return
}