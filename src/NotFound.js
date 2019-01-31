import React from 'react'
import PropTypes from 'prop-types'

export default class NotFound extends React.Component {
  navigate = path => {
    this.props.history.push(path)
  }
  render() {
    console.log('not found props', this.props)
    return (
      <div>
`       <h2>Looking for something else?</h2>
        {this.props.nearest.map(n => {
          return <p onClick={() => this.navigate(n[1])}>{n[1]}</p>
        })}
      </div>
    )
  }
}

NotFound.propTypes = {
  nearest: PropTypes.array,
  history: PropTypes.object
}
