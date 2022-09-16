import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
//             API url can be used here. But for visual dislay I put data into json file and got them from it. 
//             const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
            const response = await axios.get('./data.json')
            console.log(response);
            setArticles(response.data.articles)
        }
        getArticles();
    }, [])    

    return (
        <div>
            {articles.map((article, i) => {
                return (
                    <NewsItem
                        key={i} 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList;
