import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import withFuzzy from 'react-router-fuzzy'
import history from './history'

const WrappedSwitch = withFuzzy(Switch, Route)

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      random: 'prcing'
    }
  }
  navigate = path => {
    history.push(path)
  }
  render () {
    console.log(this.props)
    return (
      <div className="App">
        <h2><a target="_blank" href="https://www.npmjs.com/package/react-router-fuzzy">react-router-fuzzy</a></h2>
        <p>A react-router wrapper for handling incorrect routes using fuzzy search<span role="img" aria-label="flash"> ⚡️</span></p>
        <span style={{color: '#aaa', marginBottom: 5}}>Try an incorrect route e.g. prcing</span>
        <span><span className="url">https://localhost:3000/</span><input onKeyPress style={{width: 200}} placeholder="Some route" onChange={e => this.setState({random: e.target.value})} /><button onClick={() => this.navigate('/' + this.state.random)}>Go →</button></span>
        <div className="window">
          <div className="tabs">
            <p onClick={() => this.navigate('/about')}>About</p>
            <p onClick={() => this.navigate('/pricing')}>Pricing</p>
            <p onClick={() => this.navigate('/docs')}>Docs</p>
            <p onClick={() => this.navigate('/' + this.state.random)}>{`/${this.state.random}`}</p>
          </div>
          <WrappedSwitch notFoundComponent={notFound}>
            <Route path="/about" render={props => <div><h1 style={{fontSize: '4rem'}}>🐼</h1><p>About</p></div>} />
            <Route path="/pricing" render={props => <div><h1 style={{fontSize: '4rem'}}>🤑</h1><p>Pricing</p></div>} />
            <Route path="/docs" render={props => <div><h1 style={{fontSize: '4rem'}}>📚</h1><p>Docs</p></div>} />
          </WrappedSwitch>
        </div>
        <div style={{justifySelf: 'flex-end', marginTop: 10}}>Made with ❤️ by <a target="_blank" href="https://github.com/mohitk05/react-router-fuzzy">@mohitk05</a></div>
      </div>
    )
  }
}

const notFound = props => {
  return(
    <div className="notFound">
      <h1 style={{fontSize: '4rem'}} >🤷‍♀️ 404</h1>
      <span style={{ background: '#ff768d', color: '#fff', borderRadius: 5, padding: 5, paddingLeft: 10, paddingRight: 10 }}>Nearest routes:</span>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>{(props.nearest && props.nearest.length ? props.nearest.map(n => <p><Link to={n[1]}>{n[1]}</Link></p>) : <p>None</p>)}</div>
    </div>
  )
}
