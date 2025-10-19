import React from 'react';
import { Link } from 'react-router';

const Career = () => {
    return (
        <div>
            <h2>This is Career Page.</h2>
            <Link className='btn btn-secondary' to="/">Back to Home</Link>
        </div>
    );
};

export default Career;