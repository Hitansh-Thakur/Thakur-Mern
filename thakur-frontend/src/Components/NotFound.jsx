import React from 'react'
import { useParams,Link } from 'react-router-dom';

const NotFound = () => {
    // to get the parameter we use useParams hook
    const {id} = useParams();
    console.log(id);
    
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-center text-4xl font-bold'>{id} 404 NotFound</h1>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default NotFound