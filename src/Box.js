import React from "react"

const elementStyles = applied => ({
  display: "block",
  ...applied,
})

const Box = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = Box
