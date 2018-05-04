/**
 * Created by tom on 3/2/2018.
 */
import React from 'react';
import Card from './Card';

const CardList = ({robots}) => (
        <div>
            {
                robots.map(({id,name,email}, i) => {
                    return (
                        <Card
                            key={i}
                            id = {id}
                            name={name}
                            email={email}
                        />
                    );
                })
            }
        </div>
    );


export default CardList;
