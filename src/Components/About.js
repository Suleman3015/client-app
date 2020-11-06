import React from 'react';
import SideBar from './SideBar'
import styles from './About.module.css'
import BoxImage from './images/topic.jpg'
import {Link , BrowserRouter} from 'react-router-dom'
function About(){
    return(
        <div className={styles.container}>
            <SideBar/>
            <div className={styles.centercont}>
            <div className={styles.contentBoxes} >
            <div className={styles.box}>  <img className={styles.img} src={BoxImage} alt="image" />   </div>     
        </div>
        <ul className={styles.textcont}>
        <BrowserRouter>
            <Link  className={styles.text} >TOS</Link>
            <Link className={styles.text} >FAQ</Link>
            <Link className={styles.text} >HELP</Link>
            <Link className={styles.text} >CONTACT</Link>
            
            </BrowserRouter>
            </ul>
        </div>

             
            
        </div>

    )
}

export default About;