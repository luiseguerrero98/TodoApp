import { useState } from "react"

export const useFetch = () => {
    //chris puto
    const [fetchState, setFetchState] = useState({
        isLoading: false,
        hasError: null,
    });

    const getFetch = async(url, method, todo = null) => {
        setFetchState({
            ...fetchState,
            isLoading: true,    
        });
        try {
            let resp = null;
            if(!todo) {
                //console.log(url);
                //console.log(method);
                resp = await fetch(url, {
                    method: method
                });
            } else {
                resp = await fetch(url, {
                    method: method,
                    body: JSON.stringify(todo)
                });
            }
            const data= await resp.json();

            setFetchState({
                ...fetchState,
                isLoading: false
            });
            return data;
        } catch (error) {

            console.log(error.message);
            setFetchState({
                isLoading: false,
                hasError: true,
            });
        }
    };

  return (
    {
        ...fetchState,
        getFetch,
    }
  )
}
