import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import API_KEY from '../keys'

const UseGoogleSearch = () => {
    const contextAPI = "52cec448d6c3b404f";
    const { input } = useContext(AppContext);
    const [data, setData] = useState(null);

    useEffect(() => {

    }, [input]);
    
    return (
        <div>

        </div>
    )
}

export default UseGoogleSearch