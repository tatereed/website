import React from 'react';
import "../../styles/Posts.css";
function FirstPost(){
    return(
        <div className="FirstPost">
            <div className="Post-Contents">
                <h1 className="Header">
                    First Blog Post
                </h1>
                <h3>
                    Friday, January 7th, 2022
                </h3>
                <p className="Page-Contents">
                    This entire website was acting as a small learning experience for making a React app. On top of that, I also got to use TypeScript for the first time. Both of these are now some of my favorite tools.<br /><br />React is probably one of the most useful tools I have ever used, save maybe for JQuery. The style of breaking down your code into modules that you then insert into a larger module was very appealing. Combine that with the huge community it has backing it, and you have yourself a success. It makes sense that it is the most popular Front End Framework.<br /><br />TypeScript is one of those things that I never really saw myself using because it just seemed like an extra step to take. After using it though, I might not go back. The IntelliSense that you get in VS Code is wonderful and having errors being seen before actually launching the app is something that I did not know I needed. It just makes things easier with barely any hassle.<br /><br />The main problem making the website was getting Netlify to work. I have no idea how, but at one point or another, an extra import ended up in the Github.tsx that renders the SVG. Netlify would refuse to compile until it was gone, but my computer would compile it just fine. It took me a few days to figure out the problem. A little sad to say the least.<br /><br />At least now the site is up, and I can hope that someone that cares will see it one day. 
                </p>
            </div> 
        </div>
    );
}
export default FirstPost
