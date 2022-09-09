import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ExchangeItem.css';

const ExchangeItem = () => {

    const [dollar, setDollar] = useState([]);
    const [euro, setEuro] = useState([]);

    useEffect(() => {
        const getDollar = async () => {
            const response1 = await axios.get('https://v6.exchangerate-api.com/v6/53ab266be334890d1e755e4f/pair/USD/RUB'); 
            console.log(response1);
            setDollar(response1.data);
        }
        getDollar();
        const getEuro = async () => {
            const response2 = await axios.get('https://v6.exchangerate-api.com/v6/53ab266be334890d1e755e4f/pair/EUR/RUB'); 
            console.log(response2);
            setEuro(response2.data);
        }   
        getEuro();          
    }, [])


    return (
        <div className='currency-app'>
            <div className='currency'>
                <p id='usd'>USD</p>
                <p id='usd-rub'><b>{parseFloat(dollar.conversion_rate).toFixed(2)}₽</b></p>
            </div>
            <div className='currency'>
                <p id='eur'>EUR</p>
                <p id='eur-rub'><b>{parseFloat(euro.conversion_rate).toFixed(2)}₽</b></p>
            </div>
        </div>
    )
}

export default ExchangeItem;