import React from 'react';

const Spacex = ({spacex}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = spacex;
    return (
        <div>
            <div>
                {mission_name} --- {launch_year}
            </div>
            <div>
                <img src={mission_patch_small}/>
            </div>
        </div>
    );
};

export default Spacex;