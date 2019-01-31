import FuzzySet from 'fuzzyset.js'

let instance
class AllRoutes {
  constructor() {
    this.routes = []
    this.fuzzyset = undefined
  }

  setRoutes(routes) {
    routes.forEach(c => {
      this.routes.push(c.props.path)
    })
    this.fuzzyset = FuzzySet(this.routes)
  }

  routeExists(path) {
    return !!this.routes.find(r => r === path)
  }

  getNearestRoute(val) {
    if (val === '/') return this.fuzzyset.values().map(v => [0, v])
    return this.fuzzyset.get(val)
  }
}

export default () => {
  if (instance) return instance
  else {
    instance = new AllRoutes()
    return instance
  }
}
