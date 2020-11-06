import React from 'react'
import styles from './sideBar.module.css'
import Logo from './images/WrapLogo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link , BrowserRouter} from 'react-router-dom'
 function About(){
     return(
         <div className={styles.sideBar}>
         <img className={styles.Logo}  src={Logo} />
         <br/>
         <ul className={styles.navlist}>
        <BrowserRouter>
            <Link  className={styles.list} >Wraps</Link>
            <Link className={styles.list} >Follows</Link>
            <Link className={styles.list} >Leaders</Link>
            <Link className={styles.list} >Get it</Link>
            <Link className={styles.list} >About</Link>
            </BrowserRouter>
        
        </ul>
        <br/>
        <div className={styles.socialMedia}>
        <YouTubeIcon className={styles.icon} />
     <InstagramIcon className={styles.icon} />
     <LinkedInIcon className={styles.icon} />
     <FacebookIcon className={styles.icon}/>
     <TwitterIcon className={styles.icon} />
       

        </div>

         </div>
    
     )
 }

 export default About