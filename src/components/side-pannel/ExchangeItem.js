import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ExchangeItem.css';

const ExchangeItem = () => {

    const [dollar, setDollar] = useState([]);
    const [euro, setEuro] = useState([]);

    useEffect(() => {
        const getDollar = async () => {
            const response1 = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_KEY}/pair/USD/RUB0`); 
            console.log(response1);
            setDollar(response1.data);
        }
        getDollar();
        const getEuro = async () => {
            const response2 = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_KEY}/pair/EUR/RUB0`); 
            console.log(response2);
            setEuro(response2.data);
        }   
        getEuro();          
    }, [])


    return (
        <div className='currency-app'>
            <div className='currency'>
                <p className='exch'>USD</p>
                <p className='exch-rub'><b>{parseFloat(dollar.conversion_rate).toFixed(2)}₽</b></p>
            </div>
            <div className='currency'>
                <p className='exch'>EUR</p>
                <p className='exch-rub'><b>{parseFloat(euro.conversion_rate).toFixed(2)}₽</b></p>
            </div>
        </div>
    )
}

export default ExchangeItem;