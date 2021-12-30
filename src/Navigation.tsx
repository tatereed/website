import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navigation.css';

function Navigation(){
    return(
        <div className="Navigation">
            <div className="Link-Container">
                <Link to="/" className="Home-Link"> home </Link>&nbsp;
                <Link to="/about" className="About-Link"> about </Link>&nbsp;
                <Link to="/contact" className="Contact-Link"> contact </Link>&nbsp;
                <Link to="/blog" className="Blog-Link"> blog </Link>&nbsp;
            </div>
        </div>
    );
}
export default Navigation;