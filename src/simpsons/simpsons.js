import React from 'react';

import "./simpsons.css";

const Simpsons = (props) => {
    const {name, desc, picture} = props;
    return (
        <div>
            <div className={'card'}>
                <div>
                    Name: {name}
                </div>
                <div>
                    Desc: {desc}
                </div>
                <div>
                    <img className={'size'} src={picture}/>
                </div>
            </div>
        </div>
    );
};

export default Simpsons;