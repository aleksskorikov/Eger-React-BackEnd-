import React from 'react';
import '../styles/scss/_error.scss';

const error = () => {
    return (
        <>
            <div className="error-404-wrap">
                <h1 className='error-title' data-t="404" >Щось пішло не так!!!</h1>
            </div>
        </>
    )
}

export default error