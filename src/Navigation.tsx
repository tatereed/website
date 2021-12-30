import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className="Navigation">
            <div className="container">
                <Link to="/"> home </Link>
                <Link to="/about"> about </Link>
                <Link to="/contact"> contact </Link>
                <Link to="/blog"> blog </Link>
            </div>
        </div>
    );
}
export default Navigation;