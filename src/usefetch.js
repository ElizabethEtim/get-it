import { useState, useEffect } from "react";

const useFetch = (url) => {

    //state means the data being used in that component at that point in time, eg-array, string

    //custom hooks (useFetch) need to start with the word use

    //useState hook (for data that will change)

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    
//useEffect is not stored in a constant, unlike useState. its placed above return n its fxn runs during each rerendering

//useEffect hook is the way to run code every render
//useEffect to fetch data fetch data

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }

               return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            /*.catch((e) => {
                console.log(e.message);
            })*/
    
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }  
            })
            
            return () =>abortCont.abort();
    }, [url]);

//use empty dependency array [] if u only need to run the code once on the first render 
//use dependency [...] when u only need to run the code when the dependency changes

    return { data, isPending, error }
}

export default useFetch;

