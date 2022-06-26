import React from 'react';

import './rickandmorty.css';

const Rickandmorty = (props) => {
    const {id,name,status,species,gender,image} = props;
    return (
        <div>
                <div className={'card1'}>
                    <div>
                        <img className={'size'} src={image}/>
                    </div>
                    <div>
                        <div>
                            Id: {id}
                        </div>
                        <div>
                            Name: {name}
                        </div>
                        <div>
                            Status: {status}
                        </div>
                        <div>
                            Species: {species}
                        </div>
                        <div>
                            Gender: {gender}
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Rickandmorty;