import React from 'react';

const Seacrchbox = ({searchChange}) =>{
    return(
        <div>
         <input className="tc br3 pa2 bg-lightest-blue" 
         type="search" 
         placeholder="find friends" 
         onChange={searchChange}/>
        </div>
    );
}

export default Seacrchbox;