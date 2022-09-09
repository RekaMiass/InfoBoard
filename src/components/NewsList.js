import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=82a990875d204e70a268c73d908945a1')
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