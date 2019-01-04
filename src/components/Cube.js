import React from 'react';

const Cube = (props) => {
    const divStyle = {
        background: props.color
    }

    return(
        <div className="cube" style={divStyle} >
            Beautiful cube 
        </div>
    )

}

export default Cube;
