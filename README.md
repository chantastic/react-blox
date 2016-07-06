# react-blox

Reusable, transportable components with box-model style props.

## Don't use this

There's not a compelling reason why you should use this.
[https://github.com/petehunt/jsxstyle](jsxstyle) is a more comprehensive
library that overlaps this feature-set completely.

## Installation and Usage

### Node/CommonJS

*Add to project's `package.json`*
```
$ npm i -D react-blox
```

*Use as needed*
```
import { Box } from "react-blox"

const SomethingLikeADropdown = prop => (
  <Box
    border="1px solid blue"
    margin="1rem"
    padding="1rem"
    minWidth="100px"
    maxWidth="300px"
    overflow="hidden"
    overflowY="auto"
  >
    This is a block.
  </Box>
)
```

### Script-tag

*Add script*
* Copy `/dist/ReactBlox.js` into your project.
* Add it to your layout file with something like `<script
  src="path/to/ReactBlox.js"></script>`.
* `React` must be loaded before this file.

*Use as needed*
```
var Box = ReactBlox.Box;

var style = {
  border: "1px solid blue"
  margin: "1rem"
  padding: "1rem"
  minWidth: "100px"
  maxWidth: "300px"
  overflow: "hidden"
  overflowY: "auto"
}

ReactDOM.render(
  React.createElement(Box, style, "This is a block"),
  mountNode
)
```

## Components

#### `Box`
