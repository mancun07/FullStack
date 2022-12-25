import React, { Fragment, useEffect, useState } from 'react'
import classes from './NewsList.module.scss'
import NewsItem from '../components/News/NewsItem'
import Loader from '../components/Layout/Loader'


const NewsList = () => {

   const [news, setNews] =  useState([]);
   const [loading, setLoading] =  useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
    document.querySelector('body').classList.add('mainImage');

    return () => {
    document.querySelector('body').classList.remove('mainImage');
    }
}, [])

   useEffect(() => {

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/articles');
            if (!response.ok) {
                throw new Error('Извините, что-то пошло не так...')
            }
            const data = await response.json();
            setNews(data);
        } catch (err) {
            setError('Извините, что-то пошло не так...')
        }
        setLoading(false);
    }

    fetchData();
   }, [])

    return (
        <Fragment>
        {loading && <Loader />}
        {error && <div className='error'><p>{error}</p></div>}
        <div className={classes.news}>
           {news && news.map(el => {
               return <NewsItem key={el._id} el={el}/>
           })}            
        </div>
        </Fragment>
    )
}


export default NewsList
