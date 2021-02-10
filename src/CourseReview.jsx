import React from 'react'

import App from './App.jsx'
import CourseReviewContainer from './CourseReviewContainer.jsx'

export default class CourseReview extends React.Component {
  render() {
    return (
      <App {...this.props}>
        <CourseReviewContainer />
      </App>
    )
  }
}
