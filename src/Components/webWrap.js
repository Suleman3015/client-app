import React from 'react'
import {Link , BrowserRouter} from 'react-router-dom'
import styles  from './webWrap.module.css'
import BoxImage from './images/topic.jpg'
import Logo from './images/WrapLogo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import Linkedin from './Linkedin'

function Webwrap(){
    return(
        <div className={styles.container}>
    

        {/* side barr  */}
        <div className={styles.sideBar}>
        <div className={styles.semiSideBar} >
        <img className={styles.logo} src={Logo}/>
        <ul className={styles.navlist}>
        <BrowserRouter>
            <Link  className={styles.list} >Wraps</Link>
            <Link className={styles.list} >Follows</Link>
            <Link className={styles.list} >Leaders</Link>
            <Link className={styles.list} >Get it</Link>
            <Link className={styles.list} >About</Link>
            </BrowserRouter>
        
        </ul>
        <div className={styles.socialMedia}>
        <YouTubeIcon className={styles.icon} />
     <InstagramIcon className={styles.icon} />
     <LinkedInIcon className={styles.icon} />
     <FacebookIcon className={styles.icon}/>
     <TwitterIcon className={styles.icon} />
       

        </div>
        </div>
        
            
        </div>


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

          

            
            
        </div>
        </div>
    
    )
}
export default Webwrap;