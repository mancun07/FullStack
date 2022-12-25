import React, {Fragment, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { navbarActions } from '../../store/navbarSlice'
import classes from './MainNavigation.module.scss'
import Backdrop from './Backdrop'


const MainNavigation = () => {

    const mobileMenuIsShown = useSelector(state => state.navbar.mobileMenuIsShown);
    const navbarColorIsDark = useSelector(state => state.navbar.navbarColorIsDark);
    const light = useSelector(state => state.navbar.light);
    const dark = useSelector(state => state.navbar.dark);
    
    const dispatch = useDispatch();


    const toggleMenu = () => {
        dispatch(navbarActions.toggleMenu())
    }

    let theme = navbarColorIsDark ? dark : light


    return (
        <Fragment>
        <header className={classes.header} style={{background: theme.bg}}>
            <div className={classes[`sidenav-trigger`]} onClick={toggleMenu}></div>
            <div className={classes.logo}>Spring Drive</div>
            <nav className={classes.navbar}>
                <ul className={classes.menu1}>
                    <li><Link to={'/'}>НОВОСТИ</Link></li>
                    {/* <li><Link to="/home">О ГРУППЕ</Link></li>
                    <li><Link to="/photos">ФОТО</Link></li>
                    <li><Link to="/videos">ВИДЕО</Link></li>
                    <li><Link to="/audio">АУДИО</Link></li> */}
                </ul>
                <ul className={classes.menu2}>
                    <li><a href="https://vk.com/springdriveband" target="blank"><i className="fa fa-vk"></i></a></li>
                    <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fa fa-youtube"></i></a></li>
                </ul>
            </nav>
        </header>

        {/* mobile menu */}
        {mobileMenuIsShown && <Backdrop onClick={toggleMenu}/>}
        <div className={`${classes.sidenav} ${mobileMenuIsShown && classes[`sidenav-is-active`]}`}> 
            <div className={classes.close} onClick={toggleMenu}>X</div>
            <ul className={classes.sidenav__nav__menu}>
                <li onClick={toggleMenu}><Link to={'/'}>НОВОСТИ</Link></li>
                {/* <li onClick={toggleMenu}><Link to={'/home'}>О ГРУППЕ</Link></li>
                <li onClick={toggleMenu}><Link to={'/photos'}>ФОТО</Link></li>
                <li onClick={toggleMenu}><Link to={'/videos'}>ВИДЕО</Link></li>
                <li onClick={toggleMenu}><Link to={'/audio'}>АУДИО</Link></li> */}
            </ul>
     
            <ul className={classes.sidenav__nav__socials}>
                <li><a href="https://vk.com/springdriveband" target="blank"><i className="fa fa-vk fa-2x"></i></a></li>
                <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fa fa-youtube fa-2x"></i></a></li>
            </ul>
        </div>
        </Fragment>
    )
}

export default MainNavigation
