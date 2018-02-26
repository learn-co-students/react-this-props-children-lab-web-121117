import React, { Component } from 'react';

class ThemedDecorations extends Component {

  render() {

    const newChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {className: this.props.theme})
    })

    return (
      <div>{newChildren}</div>
    );
  }

}

export default ThemedDecorations;
