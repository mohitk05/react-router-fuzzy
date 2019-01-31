import React from 'react'
import AllRoutes from './AllRoutes'
import PropTypes from 'prop-types'
import NotFound from './NotFound'

const allRoutes = AllRoutes()

const withFuzzy = (Switch, Route) => {
  class WrappedSwitch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        switchProps: {}
      }
      allRoutes.setRoutes(this.props.children)
    }

    render() {
      return (
        <Switch {...this.state.switchProps}>
          {this.props.children}
          <Route path='' render={this.props.notFoundComponent ? (props) => this.props.notFoundComponent({...props, nearest: allRoutes.getNearestRoute(props.location.pathname)}) : (props) => {
            return <NotFound {...props} nearest={allRoutes.getNearestRoute(props.location.pathname)} />
          }} />
        </Switch>
      )
    }
  }

  WrappedSwitch.propTypes = {
    children: PropTypes.array,
    autoroute: PropTypes.bool,
    notFoundComponent: PropTypes.element
  }

  return WrappedSwitch
}

withFuzzy.propTypes = {
  Switch: PropTypes.element,
  Route: PropTypes.element
}

export default withFuzzy
