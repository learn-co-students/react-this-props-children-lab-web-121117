import React from 'react'

class ThemedDecoration extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      );
    });

    return (
      <div className="decorations">
        {childrenWithWrapperDiv}
      </div>
    )
  }

}

export default ThemedDecoration
