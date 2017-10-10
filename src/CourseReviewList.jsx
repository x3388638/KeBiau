import React from 'react';
import {
	Card,
	CardColumns,
	CardBlock
} from 'reactstrap';
import moment from 'moment';

import './CourseReviewList.css';

class ReviewItem extends React.Component {
	render() {
		const data = this.props.data;
		return (
			<Card className="mb-2 ReviewItem">
				<CardBlock className="pb-2">
					<div className="mb-2">
						<table>
							<tbody>
								<tr>
									<td className="pr-2" rowSpan="2">
										<a href={`https://fb.com/${data.fbid}`}>
											<img className="ReviewItem__userImg" src={`https://graph.facebook.com/${data.fbid}/picture`} alt=""/>
										</a>
									</td>
									<td>
										<a href={`https://fb.com/${data.fbid}`}>
											<span className="ReviewItem__username">{data.username}</span>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<span className="ReviewItem__date">{moment(data.time).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')}</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<div className="ReviewItem__title">
							{ data.cid || '' }
							{ data.cname }
							{ data.teacher ? ` | ${data.teacher}` : ''}
						</div>
						<div>
							{ data.content }
						</div>
					</div>
					<hr style={{marginBottom: '5px'}} />
					<div style={{display: 'flex'}}>
						<span className="text-center ReviewItem__btnLike"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {data.like['1'] || 0 }</span>
						<span className="text-center ReviewItem__btnDislike"><i className="fa fa-thumbs-o-down" aria-hidden="true"></i> {data.like['-1'] || 0 }</span>
					</div>
				</CardBlock>
			</Card>
		);
	}
}

export default class CourseReviewList extends React.Component {
	render() {
		return (
			<CardColumns className="mb-3">
				{ this.props.reviewList.map((data, i) => {
					return <ReviewItem key={i} data={data} />	
				})}
			</CardColumns>
		)
	}
}
