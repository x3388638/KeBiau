import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navigation from './Navigation.jsx'

import './App.css'

const RelativeContainer = styled(Container)`
  position: relative;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }

    this.db = window.firebase.database()
    window.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: Object.assign({}, user.providerData[0], {
            uuid: user.uid
          })
        })
      } else {
        this.setState({
          user: {
            uid: null
          }
        })
      }
    })
  }

  getChildContext() {
    return {
      user: this.state.user
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <RelativeContainer>{this.props.children}</RelativeContainer>
      </div>
    )
  }
}

App.childContextTypes = {
  user: PropTypes.object
}
