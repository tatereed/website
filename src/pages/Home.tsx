import React from 'react';

import '../styles/Home.css'
import Github from '../assets/Github';
import Reddit from '../assets/Reddit';

function Home(){
    return(
        <div className="Home">
            <div className="Home-Contents">
                <h1 className="Welcome-Header">
                    Welcome
                </h1>
                <p className="Welcome-Contents">
                    This is my website that I created to act as a small portfolio. I have a link to my github as well as a blog section. Other than that, I do not have many current plans for the site. 
                </p>
                <h1 className="Find-Me-Header">
                    Find Me
                </h1>
                <p className="Find-Me-Contents">
                    <a className="Github-Link" href="https://github.com/tatereed">
                        <Github size={32} />
                    </a>
                    <a className="Reddit-Link" href="https://www.reddit.com/user/ttaereed">
                        <Reddit size={32} />
                    </a>        
                </p>
            </div>
        </div>
    );
}
export default Home;