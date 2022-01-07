import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Blog.css';

function Blog(){
    return(
        <div className="Blog">
            <div className="Blog-Contents">
                <h1 className="Blog-Header">
                    Blog
                </h1>
                <p>
                    day/month/year
                </p>
                <hr />
                <h3>
                    <Link to="/blog/FirstPost" className="FirstPost-Link">First Post - 7/1/2022</Link>
                </h3>
                <p>
                    A short post about the tools I used to create the site.
                </p>
                <hr />
            </div>
        </div>
    );
}
export default Blog;