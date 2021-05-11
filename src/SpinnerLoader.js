import React from 'react';

const SpinnerLoader = (props) =>{
    return(
        <div class="ui active inverted dimmer">
            <div class="ui large text loader">{props.text}</div>
        </div>
    );
};

SpinnerLoader.defaultProps = {
    text: "Loading..."
};

export default SpinnerLoader;