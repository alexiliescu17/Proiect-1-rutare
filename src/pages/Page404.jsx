import React from 'react';
import {Link} from 'react-router-dom';

function Page404() {
    return(
        <div className="error">
            <img src="https://cdn3.vectorstock.com/i/1000x1000/31/47/404-error-page-not-found-design-template-for-vector-21393147.jpg"></img>
            <Link id="link" to='/'>GO back to Home</Link>
        </div>
    );
}

export default Page404;