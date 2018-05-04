/**
 * Created by tom on 3/5/2018.
 */
import React from 'react';

const Scroll = (props) =>(
        <div style={{overflowY:'scroll', border: '2px solid black', height:'700px' }}>
            {props.children}
        </div>
        );


export default Scroll;

