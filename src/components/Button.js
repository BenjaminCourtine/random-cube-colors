import React from 'react';

const Button = (props) => {
        return(
            <div>
                <button className="my-button" onClick={props.getRandomColor}>ROLL</button>
            </div>
        )
}

export default Button;
