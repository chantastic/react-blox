import React from "react"

const Box = ({
  boxSizing,
  boxShadow,

  /* niave implementation for starters */
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,

  height,

  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  maxHeight,
  maxWidth,

  minHeight,
  minWidth,

  outline,

  overflow,
  overflowX,
  overflowY,

  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  visibility,

  width,

  style,

  ...props,
}) => (
  <div
    {...props}
    style={{
      ...style,

      /* borders are niave right now. it's complicated */
      borderTop: borderTop || border,
      borderRight: borderRight || border,
      borderBottom: borderBottom || border,
      borderLeft: borderLeft || border,

      boxSizing,
      boxShadow,

      height,

      marginTop: marginTop || margin,
      marginRight: marginRight || margin,
      marginBottom: marginBottom || margin,
      marginLeft: marginLeft || margin,

      maxHeight,
      maxWidth,

      minHeight,
      minWidth,

      outline,

      overflowX: overflowX || overflow,
      overflowY: overflowY || overflow,

      paddingTop: paddingTop || padding,
      paddingRight: paddingRight || padding,
      paddingBottom: paddingBottom || padding,
      paddingLeft: paddingLeft || padding,

      visibility,

      width,
    }}
  />
)

module.exports = Box
