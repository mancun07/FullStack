import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import classes from './NewsDetails.module.scss'
import { useParams} from 'react-router-dom';
import Loader from '../components/Layout/Loader';


const NewsDetails = () => {

   const [article, setArticle] = useState('');
   const [loading, setLoading] =  useState(false);
   const [error, setError] = useState(null);

    const params = useParams();
    const id = params.id;

    console.log(typeof(article))
    console.log(article);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/api/articles/${id}`);
                if (!response.ok) {
                    throw new Error('Извините, что-то пошло не так...');
                }
                const data = await response.json();
                setArticle(data);
            } catch (err) {
                setError('Извините, что-то пошло не так...')
            }
            setLoading(false);    
        }
        fetchData();
    }, [id])


    const { date } = article;
    const modifiedDate = new Date(date);

    const day = modifiedDate.getDate() + 1;
    const month = modifiedDate.getMonth() + 1;
    const year = modifiedDate.getFullYear();


// добавляем аудио, если требуется
    let audio = null;

    if(article.audioisrequired) {
        audio = 
        <figure>
            <audio
        controls>
                <source src={`/${article.audiotitle}.mp3`} type="audio/mpeg" />
                <source src={`${article.audiotitle}.ogg`} type="audio/ogg" />
                <p>
                    Download <a href={`/${article.audiotitle}.mp3`}>MP3</a> or
                    <a href={`/${article.audiotitle}.mp3`}>OGG</a> audio.
                </p>
            </audio>
        </figure>
        
    }

// добавляем видео, если требуется

let video = null;

    if(article.videoisrequired) {
        video = 
        <iframe className={classes.iframe} 
                src={article.videolink} 
                width="789"
                height="444"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={article._id}
                >    
        </iframe>
        
    }


    return (
        <Fragment>
            {loading && <Loader />}
            {error && <div className='error'><p>{error}</p></div>}
            <div className={classes.singleNews}>
                <span className={classes.btn}>
                    <Link to={'/'}>Обратно к списку новостей</Link>
                </span>
                <div className={classes['image-wrapper']}>
                    <img src={article.image} alt={article.title}
                    />
                </div>
                <p>{day < 10 ? '0' : ''}{day}{'.'}{month < 10 ? '0' : ''}{month}{'.'}{year}</p>
                <h2>{article.title}</h2>
                <p>{article.fullcontent}</p>
                <div>{audio && audio}</div>
                <div className={classes.video}>{video && video}</div>
            </div>
        </Fragment>

    )
}



export default NewsDetails
