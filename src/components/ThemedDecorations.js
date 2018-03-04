// Code ThemedDecoration Component Here
// 2. This component renders out all of its children, while adding a `className` prop to every child.
import React from 'react'

export default class ThemedDecorations extends React.Component{
  // const childrenWithExtraProp = React.Children.map(this.props.children, child => {
  //    return React.cloneElement(child, {
  //      isPlaying: child.props.title === currentPlayingTitle
  //    });


  render(){
    const addClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return(
      <div>
        {addClassName}
      </div>
    )
  }
}
