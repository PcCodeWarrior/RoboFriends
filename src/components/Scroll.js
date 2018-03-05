/**
 * Created by tom on 3/5/2018.
 */
import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflowY:'scroll', height:'800px' }}>
            {props.children}
        </div>
        );
};

export default Scroll;

