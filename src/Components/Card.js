import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className="tc bg-light-blue dib br2 pa1 ma2 grow shadow-5">
            <img src={ `https://robohash.org/${id}?50x50`} alt=""></img>
            <div>
                <h2>{ name } </h2>
                <p>{ email }</p>
            </div>
        </div>
    
    );        
    } 

export default Card;