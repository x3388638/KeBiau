import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactAlert from 'react-s-alert'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/genie.css'

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
        Promise.all([
          this.db
            .ref(`/userLink/${user.uid}`)
            .once('value')
            .then((snapshot) => snapshot.val()),
          this.db
            .ref(`/userPicture/${user.uid}`)
            .once('value')
            .then((snapshot) => snapshot.val())
        ])
          .then(([userLink, userPicture]) => {
            if (!userLink || !userPicture) {
              // no userLink or userPicture in DB
              ReactAlert.warning(
                '請重新登入 FB 並允許「動態時報連結」權限存取，以獲得最佳的使用者體驗',
                {
                  position: 'bottom-right',
                  effect: 'genie',
                  beep: false,
                  timeout: 'none'
                }
              )
            }

            this.setState({
              user: Object.assign({}, user.providerData[0], {
                uuid: user.uid,
                fbLink: userLink || '',
                fbPicture: userPicture || ''
              })
            })
          })
          .catch(console.error)
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
        <ReactAlert html />
      </div>
    )
  }
}

App.childContextTypes = {
  user: PropTypes.object
}
