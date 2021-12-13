import React from 'react';
import Loading from './spinner/Spinner-1s-200px.gif'

const Spinner = () => {
    return (
        <div className='container text-center'>
            <img src={Loading} alt="" />
        </div>
    )
}

export default Spinner
