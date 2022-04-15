import React, { useEffect, useState } from "react";
import API_KEY from "./keys";


const CONTEXT_KEY = "398f0a5d1ca5ba084"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {

        const fatchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response) =>response.json()).then((result)=>{
                setData(result)
                //console.log(result)
            })
        }
        fatchData();
    }, [term])

    return {data}
}
export default useGoogleSearch;