import React from 'react'
import classes from './NewsItem.module.scss'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const NewsItem = ({el}) => {

    const navigate = useNavigate();

    const goToSingleNewsHandler = () => {
        navigate(`${el._id}`)
    }


    const modifiedDate = new Date(el.date)
    const day = modifiedDate.getDate() + 1;
    const month = modifiedDate.getMonth() + 1;
    const year = modifiedDate.getFullYear();

    return (
        <div className={classes.newsItem}>
            <div className={classes.imageWrapper}>
                  <img src={el.image} alt={el.title}/>
            </div>
            <p>{day < 10 ? '0' : ''}{day}{'.'}{month < 10 ? '0' : ''}{month}{'.'}{year}</p>
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <button className={classes.btn} onClick={goToSingleNewsHandler}>Читать далее</button>
        </div>
    )
}

NewsItem.propTypes = {
    el: PropTypes.object
  };


export default NewsItem
