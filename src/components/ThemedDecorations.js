// Code ThemedDecoration Component Here
import React from 'react';

const ThemedDecorations = props => {
  const childrenWithClass = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      className: props.theme
    });
  });
  return <div>{childrenWithClass}</div>;
};

export default ThemedDecorations;
