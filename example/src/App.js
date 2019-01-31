import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import withFuzzy from 'react-router-fuzzy'

const WrappedSwitch = withFuzzy(Switch, Route)

export default class App extends Component {
  render () {
    return (
      <div>
        <WrappedSwitch>
          <Route path="/about" render={props => <div>About</div>} />
          <Route path="/hello" render={props => <div>Hello</div>} />
        </WrappedSwitch>
      </div>
    )
  }
}
