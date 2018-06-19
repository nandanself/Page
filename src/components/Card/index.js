import React from 'react';
import './index.css'

const Card = (item) => {
    return (
        <div className='card'>
        <div className='overlay'>
        </div>
         <img src={require(`../../images/${item.item.image}`)}  />  
        </div>
    );
};

export default Card;