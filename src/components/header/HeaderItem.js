import DateItem from '../header/DateItem';
import './HeaderItem.css'

const HeaderItem = () => {
    return (
        <div className='head'>
            <div className='left-side'>
                <h1 className='app-name'> <style>@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
                </style> Info Board</h1>
                <p className='app-description'><b>Everything you need to know to start your day</b></p>
            </div>
            <DateItem />
        </div>
    )
}

export default HeaderItem;