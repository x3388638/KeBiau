import React from 'react'

import App from './App.jsx'
import CourseTableContainer from './CourseTableContainer.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <App>
        <CourseTableContainer />
      </App>
    )
  }
}
