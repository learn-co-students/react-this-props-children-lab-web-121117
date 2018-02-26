import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    return (
      <div>
        {this.props.children.map(child => {
          return <p className={this.props.theme}>{child}</p>
        })}
      </div>
    )
  }
}

export default ThemedDecorations
