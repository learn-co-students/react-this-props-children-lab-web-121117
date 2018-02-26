import React, { Component } from 'react';

class Invitation extends Component {

  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Invitation;
