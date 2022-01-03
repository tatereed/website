import React from 'react';

import '../styles/About.css'

function About(){
    return(
        <div className="About">
            <div className="About-Contents">
                <h1 className="About-Header">
                    About
                </h1>
                <p className="Description">
                    Tate is a 16 year old who enjoys programming things that people will never see. Tate has messed with several programming languages, but he has mostly settled on focusing on JavaScript/TypeScript.<br />This website was created to act as a lerning tool for Tate to learn React and TypeScript. The source code can be found on his GitHub.
                </p>
            </div>
        </div>
    );
}
export default About;