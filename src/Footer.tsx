import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.css';

function Footer(){
    return(
        <div className="Footer">
            <div className="Text-Container">
                Copyright &copy; 2022 - Tate Reed<br /><Link to="/privacy" className="Privacy-Link">privacy policy</Link>
            </div>
        </div>
    );
}
export default Footer;
