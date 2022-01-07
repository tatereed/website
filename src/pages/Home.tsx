import React from 'react';

import '../styles/Home.css'
import Github from '../assets/Github';
import Linkedin from '../assets/Linkedin';

function Home(){
    return(
        <div className="Home">
            <div className="Home-Contents">
                <h1 className="Welcome-Header">
                    Welcome
                </h1>
                <p className="Welcome-Contents">
                    This is Tate's website that he created to act as a small portfolio. There is a link to his Github as well as a blog section. Other than that, there are not many current plans for the site. 
                </p>
                <h1 className="Find-Me-Header">
                    Find Tate
                </h1>
                <p className="Find-Me-Contents">
                    <a className="Github-Link" href="https://github.com/tatereed" target="_blank" rel="noreferrer">
                        <Github size={32} />
                    </a>
                    <a className="Linkedin-Link" href="https://www.linkedin.com/in/tate-reed-3a172422a/" target="_blank" rel="noreferrer">
                        <Linkedin size={32} />
                    </a>        
                </p>
            </div>
        </div>
    );
}
export default Home;