import React from 'react'
import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={classes.footer}>
           <p>Мы в социальных сетях</p> 
            <ul className={classes['footer-menu']}>
                <li><a href="https://vk.com/springdriveband" target="blank"><i className="fa fa-vk"></i></a></li>
                <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fa fa-youtube"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer
