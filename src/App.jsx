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
        Promise.all([
          this.db
            .ref(`/userLink/${user.uid}`)
            .once('value')
            .then((snapshot) => {
              const userLink = snapshot.val()
              return userLink ? Promise.resolve(userLink) : Promise.reject()
            }),
          this.db
            .ref(`/userPicture/${user.uid}`)
            .once('value')
            .then((snapshot) => {
              const userPicture = snapshot.val()
              return userPicture
                ? Promise.resolve(userPicture)
                : Promise.reject()
            })
        ])
          .then(([userLink, userPicture]) => {
            this.setState({
              user: Object.assign({}, user.providerData[0], {
                uuid: user.uid,
                fbLink: userLink,
                fbPicture: userPicture
              })
            })
          })
          .catch(() => {
            // no userLink or userPicture in DB; re-login to store data
            window.firebase
              .auth()
              .signOut()
              .then(() => {
                window.location.reload()
              })
              .catch(console.error)
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
