import React, { Component } from 'react'
import Navbar from './component/Navbar'
import New from './component/New'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

apiKey = process.env.REACT_APP_NEWS_API;
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route  path="/" element={<New key="general"  apikey={this.apiKey}  country="in" category='general' />} exact/>
            <Route  path="/business" element={<New key="business"  apikey={this.apiKey}  country="in" category='business' />} exact/>
            <Route  path="/entertainment" element={<New key="entertainment"  apikey={this.apiKey}  country="in" category='entertainment' />} exact/>
            <Route  path="/general" element={<New key="general"  apikey={this.apiKey}  country="in" category='general' />} exact/>
            <Route  path="/health" element={<New key="health"  apikey={this.apiKey}  country="in" category='health' />} exact/>
            <Route  path="/science" element={<New key="science"  apikey={this.apiKey}  country="in" category='science' />} exact/>
            <Route  path="/sports" element={<New key="sports"  apikey={this.apiKey}  country="in" category='sports' />} exact/>
            <Route  path="/technology" element={<New key="technology"  apikey={this.apiKey}  country="in" category='technology' />} exact/>
          </Routes>

        </Router>
      </div>
    )
  }
}
