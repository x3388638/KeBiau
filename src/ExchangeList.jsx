import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	Badge
} from 'reactstrap';
import moment from 'moment';

export default class ExchangeList extends React.Component {
	render() {
		const containerStyle = {
			marginTop: this.props.settingOpen ? '400px' : '190px',
			transition: 'all .5s'
		}

		return (
			<Container className="mb-5" style={containerStyle}>
				{ this.props.exchangeList.map((item, i) => {
					return (
						<Row key={i} className="mb-2">
							<Col xs="12">
								<Card>
									<div style={{padding: "5px 5px 5px 30px"}}>
										<Row>
											<Col className="mt-1" lg="5" sm="12" xs="12">
												<div>
													<table>
													<tbody>
														<tr>
															<td className="pr-1" rowSpan="2">
																<a href={`https://fb.com/${item.fbid}`}>
																	<img style={{borderRadius: '50px'}} height="45px" src={`https://graph.facebook.com/${item.fbid}/picture`} alt=""/>
																</a>
															</td>
															<td>
																<a href={`https://fb.com/${item.fbid}`} style={{color: '#365899', fontWeight: 'bold'}}>{ item.name }</a>
															</td>
														</tr>
														<tr>
															<td style={{fontSize: '13px', color: '#989898'}}>
																{ moment(item.time).utcOffset(8).format('YYYY/MM/DD HH:mm:ss') }
															</td>
														</tr>
													</tbody>
													</table>
												</div>
												<div className="mt-1 ml-2 pl-1" style={{fontSize: '14px', color: '#666666', borderLeft: "3px solid #bbb"}}>
													{ item.desc.split('\n').map((val, i) => {
														return (<div key={i}>{val}</div>)
													}) }
												</div>
											</Col>
											<Col lg="4" sm="12" xs="12">
												<h6 className="pl-3" style={{borderBottom: '1px solid #787878'}}>想要的課</h6>
												{ item.want.map((wnatCourse, i) => {
													return (<div key={i} style={{fontSize: '14px'}}><Badge color="default" pill>{i + 1}</Badge> {wnatCourse}</div>)
												})}
											</Col>
											<Col lg="3" sm="12" xs="12">
												<h6 className="pl-3" style={{borderBottom: '1px solid #787878'}}>不需要的課</h6>
												{ item.have.map((haveCourse, i) => {
													return (<div key={i} style={{fontSize: '14px'}}><Badge color="default" pill>{i + 1}</Badge> {haveCourse}</div>)
												})}
											</Col>
										</Row>
									</div>
								</Card>
							</Col>
						</Row>
					)
				})}
			</Container>
		)
	}
}
