import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        screenText: 'Ta calor!',
        iconName: 'sun'
    },
    winter: {
        screenText: 'Ta frio!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) =>{

    const season = getSeason(props.lat, new Date().getMonth());
    const {screenText, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`} >
            <i className={`icon-left huge icon ${iconName}`}/>
            <h1>{screenText}</h1>
            <i className={`icon-right huge icon ${iconName}`}/>
        </div>
    );
};

export default SeasonDisplay;