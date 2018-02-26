import React from 'react'

class ThemedDecorations extends React.Component {
  render () {
    return(
      <div>
        {this.props.children.map(child => {
          return <div className={this.props.theme}>{child}</div>
        })}
      </div>
    )
  }
}

export default ThemedDecorations;
