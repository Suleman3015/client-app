import React from 'react'
import {Link , BrowserRouter} from 'react-router-dom'
import styles  from './webWrap.module.css'
import BoxImage from './images/topic.jpg'
import SideBar from './SideBar'
import Logo from './images/WrapLogo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


function Webwrap(){
    return(
        <div className={styles.container}>
    

        {/* side barr  */}
        <SideBar/>
        

    

        {/* main center content containers  */}
        <div className={styles.contentBoxes} >
            <div className={styles.box}>  <img className={styles.img} src={BoxImage} alt="image" />   </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box}> <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>


            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>
            <div className={styles.box} > <img className={styles.img} src={BoxImage} alt="image" />  </div>

          

            
            
        </div>
        </div>
    
    )
}
export default Webwrap;