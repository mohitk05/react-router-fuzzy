# react-router-fuzzy

> A react-router wrapper for handling incorrect routes using fuzzy search.

[![NPM](https://img.shields.io/npm/v/react-router-fuzzy.svg)](https://www.npmjs.com/package/react-router-fuzzy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-router-fuzzy
```

## Usage
`react-router-fuzzy` provides a wrapper, `withFuzzy` for `Switch` component of `react-router-dom`. It also requires `Route` to be sent as it adds a default 404 route as a child to `Switch`. This component displays a list of nearest routes to the current path, if no matching route is found. You can specify your own 404 component, which then receives a `nearest` prop, which is an array of results as per [fuzzyset.js](https://glench.github.io/fuzzyset.js/) output.

```jsx
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import withFuzzy from 'react-router-fuzzy'

const WrappedSwitch = withFuzzy(Switch, Route)

const custom404 = props => {
  //custom component receives 'nearest' as a prop
  return <div>{props.nearest.map(n => <i>{n[1]}</i>)}</div>
}

export default class SomeComponent extends Component {
  render () {
    return (
      <WrappedSwitch notFound={custom404}>
        <Route path="/about" render={props => <div>About</div>} />
        <Route path="/docs" render={props => <div>Docs</div>} />
        <Route path="/pricing" render={props => <div>Pricing</div>} />
        <Route path="/contact" render={props => <div>Contact</div>} />
      </WrappedSwitch>
    )
  }
}

```

## License

MIT © [mohitk05](https://github.com/mohitk05)
