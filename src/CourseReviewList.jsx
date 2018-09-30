import React from 'react';
import {
	Card,
	CardBody,
	CardColumns
} from 'reactstrap';
import moment from 'moment';
import styled, { css } from 'styled-components';

import './CourseReviewList.css';

const ReviewCard = styled(Card)`
	border-radius: 0;
	box-shadow: 0 0 5px 0px #dddddd;
`;

ReviewCard.DelBtn = styled.span`
	position: absolute;
	right: 15px;
	font-size: 26px;
	top: 12px;
	cursor: pointer;
	height: 17px;
	line-height: 17px;
	color: #d9534f;
	&:hover {
		color: #c9302c;
	}
`;

ReviewCard.UserImg = styled.img`
	border-radius: 30px;
`;

ReviewCard.Username = styled.span`
	color: #365899;
	font-size: 14px;
	font-weight: bold;
`;

ReviewCard.Date = styled.span`
	font-size: 12px;
	color: #90949c;
`;

ReviewCard.Title = styled.div`
	font-weight: bold;
`;

ReviewCard.Content = styled.div`
	white-space: pre-line;
`;

ReviewCard.LikeBtn = styled.span`
	flex: 1;
	padding: 7px;
	transition: all .3s;
	${ props => props.like && css`
		color: #0275d8;
		font-weight: bold;
	`}

	&:hover {
		background: #0275d8;
		color: #fff;
		cursor: pointer;
	}
`;

ReviewCard.DisLikeBtn = styled.span`
	flex: 1;
	padding: 7px;
	transition: all .3s;
	${ props => props.dislike && css`
		color: #d9534f;
		font-weight: bold;
	`}

	&:hover {
		background: #d9534f;
		color: #fff;
		cursor: pointer;
	}
`

class ReviewItem extends React.Component {
	render() {
		const data = this.props.data;
		const like = +data.currentUserLike === 1;
		const dislike = +data.currentUserLike === -1; 
		return (
			<ReviewCard className="mb-2">
				<CardBody className="pb-2">
					<div className="mb-2">
						<table>
							<tbody>
								<tr>
									<td className="pr-2" rowSpan="2">
										<a href={ data.fbLink || `https://fb.com/${ data.fbid }` }>
											<ReviewCard.UserImg src={`https://graph.facebook.com/${data.fbid}/picture`} height="55" alt=""/>
										</a>
									</td>
									<td>
										<a href={ data.fbLink || `https://fb.com/${ data.fbid }` }>
											<ReviewCard.Username>{data.username}</ReviewCard.Username>
										</a>
										{ !!data.currentUserPost &&
											<ReviewCard.DelBtn onClick={() => {this.props.onDel(data.key)}}>&times;</ReviewCard.DelBtn>
										}
									</td>
								</tr>
								<tr>
									<td>
										<ReviewCard.Date>{moment(data.time).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')}</ReviewCard.Date>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<ReviewCard.Title>
							{ data.cid ? `${data.cid} ` : '' }
							{ data.cname }
							{ data.teacher ? ` | ${data.teacher}` : ''}
						</ReviewCard.Title>
						<ReviewCard.Content>
							{ data.content }
						</ReviewCard.Content>
					</div>
					<hr style={{marginBottom: '5px'}} />
					<div style={{display: 'flex'}}>
						<ReviewCard.LikeBtn className="text-center" like={ !!like } onClick={() => {this.props.onLike(1, data.currentUserLike, data.key)}}>
							<i className={`fa ${!!like ? 'fa-thumbs-up' : 'fa-thumbs-o-up'}`} aria-hidden="true"></i> {data.like['1'] || 0 }
						</ReviewCard.LikeBtn>
						<ReviewCard.DisLikeBtn className="text-center" dislike={ !!dislike } onClick={() => {this.props.onLike(-1, data.currentUserLike, data.key)}}>
							<i className={`fa ${!!dislike ? 'fa-thumbs-down' : 'fa-thumbs-o-down'}`} aria-hidden="true"></i> {data.like['-1'] || 0 }
						</ReviewCard.DisLikeBtn>
					</div>
				</CardBody>
			</ReviewCard>
		);
	}
}

export default class CourseReviewList extends React.Component {
	componentWillReceiveProps() {
		!!window.reviewListBricks && window.reviewListBricks.destroy();
	}

	componentDidUpdate() {
		window.reviewListBricks = new window.Bricklayer(document.querySelector('.bricklayer'));
	}

	render() {
		return (
			<CardColumns className="mb-3 bricklayer">
				{ this.props.reviewList.map((data, i) => {
					return <ReviewItem key={i} data={data} {...this.props} />	
				})}
			</CardColumns>
		)
	}
}
