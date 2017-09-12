import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	Badge
} from 'reactstrap';

export default class ExchangeList extends React.Component {
	render() {
		const containerStyle = {
			marginTop: this.props.settingOpen ? '370px' : '160px',
			transition: 'all .5s'
		}

		return (
			<Container style={containerStyle}>
				<Row>
					<Col xs="12">
						<Card>
							<div style={{padding: "5px 5px 5px 30px"}}>
								<Row>
									<Col className="mt-1" sm="5" xs="12">
										<div>
											<table>
											<tbody>
												<tr>
													<td className="pr-1" rowSpan="2">
														<a href="https://fb.com">
															<img style={{borderRadius: '50px'}} height="45px" src="https://graph.facebook.com/1513796702039003/picture" alt=""/>
														</a>
													</td>
													<td>
														<a href="https://fb.com" style={{color: '#365899', fontWeight: 'bold'}}>YYYYYY.Y.Chang</a>
													</td>
												</tr>
												<tr>
													<td style={{fontSize: '13px', color: '#989898'}}>
														2017/09/13 01:20:19
													</td>
												</tr>
											</tbody>
											</table>
										</div>
										<div className="mt-1 ml-2 pl-1" style={{fontSize: '14px', color: '#666666', borderLeft: "3px solid #bbb"}}>
											補充說明補
										</div>
									</Col>
									<Col sm="4" xs="12">
										<h6 className="pl-3" style={{borderBottom: '1px solid #787878'}}>想要的課</h6>
										<div style={{fontSize: '14px'}}><Badge color="default" pill>1</Badge> 5efgh 船艇</div>
										<div style={{fontSize: '14px'}}><Badge color="default" pill>2</Badge> 5efgh 船艇</div>
										<div style={{fontSize: '14px'}}><Badge color="default" pill>3</Badge> 5efgh 船艇</div>
									</Col>
									<Col sm="3" xs="12">
										<h6 className="pl-3" style={{borderBottom: '1px solid #787878'}}>不需要的課</h6>
										<div style={{fontSize: '14px'}}><Badge color="default" pill>1</Badge> 5efgh 船艇</div>
										<div style={{fontSize: '14px'}}><Badge color="default" pill>2</Badge> 5efgh 船艇</div>
										<div style={{fontSize: '14px'}}><Badge color="default" pill>3</Badge> 5efgh 船艇</div>
									</Col>
								</Row>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}
