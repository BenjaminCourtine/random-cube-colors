import React from 'react';

// import components
import Cube from './Cube'
import Button from './Button'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color : ''
        }
    }

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({color})
        console.log(this.state.color)
    }

    render() {
        return(
            <div>
                <Cube color={this.state.color} />
                <Button getRandomColor={this.getRandomColor} />
            </div>
        )
    }
}