import React, { Component } from 'react'
import { Route, withRouter, Switch } from "react-router-dom"
import HelloWorld from './pages/HelloWorld'
import PropsEvent from './pages/PropsEvent/Parent'
import Context from './pages/Context/Provider'
import PropsChildren from './pages/PropsChildren'
import Hoc from './pages/Hoc'
import Mobx from './pages/Mobx'

class App extends Component {
  render () {
    return (
      <Switch>
        {/* helloWorld */}
        <Route path="/hw" component={HelloWorld} />
        {/* communication between parent and child */}
        <Route path="/pe" component={PropsEvent} />
        {/* context */}
        <Route path="/context" component={Context} />
        {/* props.children */}
        <Route path="/pc" component={PropsChildren} />
        {/* hoc */}
        <Route path="/hoc" component={Hoc} />
        {/* store */}
        <Route path="/mobx" component={Mobx} />
      </Switch>
    )
  }
}

export default withRouter(App);