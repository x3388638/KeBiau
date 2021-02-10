import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import ExchangeItem from './ExchangeItem'

export default class ExchangeList extends React.Component {
  render() {
    const containerStyle = {
      marginTop: '190px',
      transition: 'all .5s'
    }

    return (
      <Container className="mb-5" style={containerStyle}>
        {this.props.exchangeList.map((item, i) => {
          return (
            <Row key={i} className="mb-2">
              <Col xs="12">
                <ExchangeItem item={item} />
              </Col>
            </Row>
          )
        })}
      </Container>
    )
  }
}
