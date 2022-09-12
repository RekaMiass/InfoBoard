import './NewsItem.css'

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
            <div className="news-app">  
                <div className="news-item">
                    <img className="news-img" src={urlToImage} alt='Can not load :('/>
                    <div className='news-content'>
                        <h3><a href={url}>{title}</a></h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
    )
}

export default NewsItem;