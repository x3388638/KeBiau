import React from 'react';
import {
	Table,
	Button
} from 'reactstrap';
import styled from 'styled-components'
import Loading from './Loading';

const CommonRow = styled.div`
	display: grid;
	grid-template-columns: 2fr 3fr 1fr 1fr 2fr 3fr 1fr 1fr 1fr;
	grid-gap: 2px;
	margin: 5px;
`;

const TableHeader = styled(CommonRow)`
	position: sticky;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 10;
    border-bottom: 1px solid #adadad;
	& span {
		padding: 10px 0px;
		font-weight: bold;
	}

	@media screen and (max-width: 992px) {
		display: none;
	}
`;

const TableRow = styled(CommonRow)`
	background: #f9f9f9;
	border-radius: 2px;
	& span {
		display: flex;
		align-items: center;
		padding: 5px;
		&.TableRow__link,
		&.TableRow__btn {
			justify-content: center;
		}
	}

	@media screen and (max-width: 991px) {
		padding: 5px;
		box-shadow: 1px 1px 2px 0px #878787;
		margin-bottom: 10px;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-areas: "cid cname classes"
			"teacher teacher teacher"
			"time time time"
			"location location location"
			"link link btn";
		& span {
			padding: 0 8px;
		}

		& span.TableRow__cid {
			grid-area: cid;
		}
		& span.TableRow__cname {
			grid-area: cname;
			justify-content: center;
			font-weight: bold;
		}
		& span.TableRow__classes {
			grid-area: classes;
			justify-content: flex-end;
			&::after {
				content: '班';
				padding-left: 2px;
			}
		}
		& span.TableRow__time {
			grid-area: time;
			&::before {
				content: '時間:';
				padding-right: 2px;
			}
		}
		& span.TableRow__location {
			grid-area: location;
			&::before {
				content: '地點:';
				padding-right: 2px;
			}
		}
		& span.TableRow__teacher {
			grid-area: teacher;
			&::before {
				content: '教師:';
				padding-right: 2px;
			}
		}
		& span.TableRow__grade {
			display: none;
		}
		& span.TableRow__link {
			grid-area: link;
			justify-content: flex-end;
		}
		& span.TableRow__btn {
			grid-area: btn;
			& button {
				width: 100%;
			}
		}
	}
`;

class DeptSelector extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: ''
		};

		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
		this.setState({
			selected: '通識'
		});
	}

	handleSelect(e) {
		this.setState({
			selected: e.target.value
		});

		this.props.onChangeDept(e.target.value);
	}

	render() {
		return (
			<div className="mb-2">
				<strong>開課單位：</strong>
				<select value={this.state.selected} onChange={this.handleSelect}>
					{
						Object.keys(this.props.deptList).map((val, i) => {
							return (<option key={ i } value={ val }>{ val }</option>);
						})
					}
				</select> {' '}
				<Button
					className={this.props.filterCourse ? 'active' : ''}
					color={this.props.filterCourse ? 'danger' : 'light'}
					size="sm"
					onClick={this.props.onFilterCourse}
				>
					篩選課程
				</Button> {' '}
				<Button
					className={this.props.filterConflict ? 'active' : ''}
					color={this.props.filterConflict ? 'danger' : 'light'}
					size="sm"
					onClick={this.props.onFilterConflict}
				>
					{ this.props.filterConflict ? '取消過濾' : '過濾衝堂' }
				</Button>
				<a className="float-right mr-2 text-warning" href="https://ccweb.ncnu.edu.tw/student/DeptQuerylist.php" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-sitemap" aria-hidden="true"></i> 各系所課程地圖
				</a>
			</div>
		)
	}
}

export default class CourseList extends React.Component {
	render() {
		const list = this.props.courseList;
		return (
			<div>
				<DeptSelector { ...this.props } />
				<div style={{overflow: 'auto', maxHeight: '487px', background: '#fff', width: '100%'}}>
					{ !list.length &&
						<Loading />
					}

					{ !!list.length &&
						<React.Fragment>
							<TableHeader>
								<span>課號</span>
								<span>課程名稱</span>
								<span>班別</span>
								<span>時段</span>
								<span>授課地點</span>
								<span>教師</span>
								<span>年級</span>
								<span></span>
								<span></span>
							</TableHeader>
							{
								Object.keys(list).map((val) =>
									this.props.filterConflict && list[val].isConflict ? null : (
										<TableRow key={val} data-uuid={val}>
											<span className="TableRow__cid">{list[val].cid}</span>
											<span className="TableRow__cname">{list[val].cname}</span>
											<span className="TableRow__classes">{list[val].classes}</span>
											<span className="TableRow__time">{list[val].time}</span>
											<span className="TableRow__location">{list[val].location}</span>
											<span className="TableRow__teacher">{list[val].teacher}</span>
											<span className="TableRow__grade">{list[val].grade}</span>
											<span className="TableRow__link">
												<a href={`https://ccweb.ncnu.edu.tw/student/aspmaker_course_opened_detail_viewview.php?showdetail=&year=${list[val].year}&courseid=${list[val].cid}&class=${list[val].classes}&modal=2`} target="_blank">課綱 <i className="fa fa-external-link" aria-hidden="true"></i></a>
											</span>
											<span className="TableRow__btn">
												<Button color="success" size="sm" disabled={list[val].isConflict ? true : false} onClick={() => { this.props.onAddCourse(list[val], true) }}>{list[val].isConflict ? '衝堂' : '加入'}</Button>
											</span>
										</TableRow>
									)
								)
							}
						</React.Fragment>
					}
				</div>
			</div>
		);
	}
}
