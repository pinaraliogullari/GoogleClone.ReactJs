import { useEffect, useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import API_KEY from '../keys'

const UseGoogleSearch = () => {
    const contextAPI = "52cec448d6c3b404f";
    const { input } = useContext(AppContext);
    const { setResult, result } = useContext(AppContext);


    useEffect(() => {
        console.log("useEffect çalıştı");
        const getResults = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${contextAPI}&q=${input}`);
                setResult(response.data);
                console.log("Sonuçlar alındı:", response.data);
            } catch (error) {
                console.error('Veri getirilirken hata oluştu:', error.response?.data || error.message);
            }
        };

        if (input) {
            getResults();
        }
    }, [input]);
    return null;
}

export default UseGoogleSearch