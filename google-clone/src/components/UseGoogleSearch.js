import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import API_KEY from '../keys'

const UseGoogleSearch = () => {
    const contextAPI = "52cec448d6c3b404f";
    const { input } = useContext(AppContext);
    const { setResult, result } = useContext(AppContext);


    useEffect(() => {
        const getResults = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${contextAPI}:omuauf_lfve&q=${input}`);
                setResult(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getResults();
    }, [input]);
    return (
        <div>   
            {result && (
                <pre>{JSON.stringify(result, null, 2)}</pre>
            )}
        </div>
    )
}

export default UseGoogleSearch