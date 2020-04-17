import React from 'react';
import {Link} from 'react-router-dom';

function About(props) {
    
    console.log(props);

    return(
        <div>
            
            
                <h1>About</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, recusandae deleniti iste dolores exercitationem maiores doloribus nemo tempora, consequuntur natus dolorum fugit quae eius assumenda voluptatum quibusdam voluptatibus eum. Earum!</p>
                <Link to='/'>Home</Link>
        </div>
    );
}

export default About;