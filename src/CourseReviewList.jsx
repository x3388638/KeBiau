import React from 'react';
import {
	Row,
	Col
} from 'reactstrap';

export default class CourseReviewList extends React.Component {
	render() {
		return (
			<Row>
				<Col xs="12" sm="12" md="6">
					<div style={{border: '1px solid rgba(0,0,0,.125)', borderRadius: '.20rem', padding: '10px'}}>
						<div className="mb-2">
							<table>
								<tbody>
									<tr>
										<td className="pr-2" rowSpan="2">
											<a href="#">
												<img src="https://graph.facebook.com/1513796702039003/picture" alt="" style={{borderRadius: '30px'}}/>
											</a>
										</td>
										<td>
											<a href="#">
												<span style={{color: '#365899', fontSize: '14px', fontWeight: 'bold'}}>Y.Y. ChaNg</span>
											</a>
										</td>
									</tr>
									<tr>
										<td>
											<span style={{fontSize: '12px', color:'#90949c'}}>2017/07/07</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div>
							<div style={{fontWeight: 'bold'}}>
								103501 Linux 系統管理實務 | 練喆明
							</div>
							<div>
								推推，老師很帥，聲音很有磁性，內容豐富精實有用又有趣ＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲ
							</div>
						</div>
						<hr style={{marginBottom: '10px'}} />
						<div>789</div>
					</div>
				</Col>
			</Row>
		)
	}
}
