import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardColumns,
	CardBlock
} from 'reactstrap';

import './CourseReviewList.css';

class ReviewItem extends React.Component {
	render() {
		return (
			<Card className="mb-2 ReviewItem">
				<CardBlock className="pb-2">
					<div className="mb-2">
						<table>
							<tbody>
								<tr>
									<td className="pr-2" rowSpan="2">
										<a href="#">
											<img className="ReviewItem__userImg" src="https://graph.facebook.com/1513796702039003/picture" alt=""/>
										</a>
									</td>
									<td>
										<a href="#">
											<span className="ReviewItem__username">Y.Y. ChaNg</span>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<span className="ReviewItem__date">2017/07/07</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<div className="ReviewItem__title">
							103501 Linux 系統管理實務 | 練Ｏ明
						</div>
						<div>
							推推，老師很帥，聲音很有磁性，內容豐富精實有用又有趣ＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲＲ
						</div>
					</div>
					<hr style={{marginBottom: '5px'}} />
					<div style={{display: 'flex'}}>
						<span className="text-center ReviewItem__btnLike"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 116</span>
						<span className="text-center ReviewItem__btnDislike"><i className="fa fa-thumbs-o-down" aria-hidden="true"></i> 23</span>
					</div>
				</CardBlock>
			</Card>
		);
	}
}

export default class CourseReviewList extends React.Component {
	render() {
		return (
			<CardColumns>
				<ReviewItem />
			</CardColumns>
		)
	}
}
