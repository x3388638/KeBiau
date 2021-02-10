import React from 'react'
import { Row, Col, Card, Badge } from 'reactstrap'
import moment from 'moment'
import styled from 'styled-components'

const Container = styled(Card)`
  padding: 5px 5px 5px 30px;
`

const Profile = styled.img`
  border-radius: 50px;
`

const Username = styled.a`
  color: #365899;
  font-weight: bold;
`

const Timestamp = styled.td`
  font-size: 13px;
  color: #989898;
`

const Desc = styled.div`
  font-size: 14px;
  color: #666;
  border-left: 3px solid #bbb;
`

const CourseTitle = styled.h6`
  border-bottom: 1px solid #787878;
`

const Course = styled.div`
  font-size: 14px;
`

export default class ExchangeItem extends React.PureComponent {
  render() {
    const { fbLink, fbPicture, name, time, desc, have, want } = this.props.item
    return (
      <Container>
        <Row>
          <Col className="mt-1" lg="5" sm="12" xs="12">
            <div>
              <table>
                <tbody>
                  <tr>
                    <td className="pr-1" rowSpan="2">
                      <a
                        href={fbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(!fbLink
                          ? { onClick: (e) => e.preventDefault() }
                          : {})}
                      >
                        <Profile
                          height="45px"
                          src={
                            fbPicture ||
                            'https://graph.facebook.com/100/picture'
                          }
                          alt=""
                        />
                      </a>
                    </td>
                    <td>
                      <Username
                        href={fbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(!fbLink
                          ? { onClick: (e) => e.preventDefault() }
                          : {})}
                      >
                        {name}
                      </Username>
                    </td>
                  </tr>
                  <tr>
                    <Timestamp>
                      {moment(time).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')}
                    </Timestamp>
                  </tr>
                </tbody>
              </table>
            </div>
            <Desc className="mt-1 ml-2 pl-1">
              {desc.split('\n').map((val, i) => {
                return <div key={i}>{val}</div>
              })}
            </Desc>
          </Col>
          <Col lg="4" sm="12" xs="12">
            <CourseTitle className="pl-3">想要的課</CourseTitle>
            {want.map((wnatCourse, i) => {
              return (
                <Course key={i}>
                  <Badge color="secondary" pill>
                    {i + 1}
                  </Badge>{' '}
                  {wnatCourse}
                </Course>
              )
            })}
          </Col>
          <Col lg="3" sm="12" xs="12">
            <CourseTitle className="pl-3">不需要的課</CourseTitle>
            {have.map((haveCourse, i) => {
              return (
                <Course key={i}>
                  <Badge color="secondary" pill>
                    {i + 1}
                  </Badge>{' '}
                  {haveCourse}
                </Course>
              )
            })}
          </Col>
        </Row>
      </Container>
    )
  }
}
