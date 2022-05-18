import React, { Component } from 'react'
import Navbar from './component/Navbar'
import New from './component/New'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route  path="/" elements={<New key="general" country="in" category='general' />} exact/>
            <Route  path="/business" elements={<New key="business" country="in" category='business' />} exact/>
            <Route  path="/entertainment" elements={<New key="entertainment" country="in" category='entertainment' />} exact/>
            <Route  path="/general" elements={<New key="general" country="in" category='general' />} exact/>
            <Route  path="/health" elements={<New key="health" country="in" category='health' />} exact/>
            <Route  path="/science" elements={<New key="science" country="in" category='science' />} exact/>
            <Route  path="/sports" elements={<New key="sports" country="in" category='sports' />} exact/>
            <Route  path="/technology" elements={<New key="technology" country="in" category='technology' />} exact/>
          </Routes>

        </Router>
      </div>
    )
  }
}
