import React from 'react';

import '../styles/Contact.css'

function Contact(){
    return(
        <div className="Contact">
            <div className="Contact-Contents">
                <h1 className="Contact-Header">
                    Contact
                </h1>
                <p>
                    You can find me through my <a className="Github-Link-Contact" href="https://github.com/tatereed">GitHub</a> or <a className="Linkedin-Link-Contact" href="https://www.linkedin.com/in/tate-reed-3a172422a/">Linkedin</a>. If you want to contact me more directly, you can email me at <a className="Email-Link-Contact" href="mailto:contact.tatereed@gmail.com">contact.tatereed@gmail.com</a>
                </p>
            </div>
        </div>
    );
}
export default Contact;