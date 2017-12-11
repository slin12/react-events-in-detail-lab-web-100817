// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    const coordinates = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>
  }
}

export default CoordinatesButton
