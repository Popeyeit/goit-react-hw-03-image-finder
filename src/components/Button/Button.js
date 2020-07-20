import React from 'react';
import './Button.css'
const Button = ({requestByQuqery}) => {
    return (
        
        <button type="button" onClick={requestByQuqery} className='Button'> Load More</button>
        
    );
};

export default Button;