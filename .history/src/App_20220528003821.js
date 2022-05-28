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
          <New key
          <Routes>
            <Route  path="/" element={<New key="general" country="in" category='general' />} exact/>
            <Route  path="/business" element={<New key="business" country="in" category='business' />} exact/>
            <Route  path="/entertainment" element={<New key="entertainment" country="in" category='entertainment' />} exact/>
            <Route  path="/general" element={<New key="general" country="in" category='general' />} exact/>
            <Route  path="/health" element={<New key="health" country="in" category='health' />} exact/>
            <Route  path="/science" element={<New key="science" country="in" category='science' />} exact/>
            <Route  path="/sports" element={<New key="sports" country="in" category='sports' />} exact/>
            <Route  path="/technology" element={<New key="technology" country="in" category='technology' />} exact/>
          </Routes>

        </Router>
      </div>
    )
  }
}
