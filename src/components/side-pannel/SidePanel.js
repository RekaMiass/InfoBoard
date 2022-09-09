import DateItem from './DateItem';
import ExchangeItem from './ExchangeItem';
import WeatherItem from './WeatherItem';
import React, {useState} from 'react';
import './SidePanel.css'

const SidePanel = () => {

    const [showPanel, setShowPanel] = useState(false);

    return (
        <div className='side-panel'>
            <div className='side-panel-content'>
                <DateItem />
                <div className={showPanel ? 'hidden-content' : 'content'} onclick={() => setShowPanel(false)}>
                    <WeatherItem />
                    <ExchangeItem />
                </div>  
            </div>
            <button onClick={() => setShowPanel(!showPanel)}>
            {showPanel ? "Show less" : "Show more"}</button>
        </div>
    )
}

export default SidePanel;