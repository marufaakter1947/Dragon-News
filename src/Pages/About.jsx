import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div>
           <h2>This is About Page</h2> 
            <Link className='btn btn-secondary' to="/">Back to Home</Link>
        </div>
    );
};

export default About;