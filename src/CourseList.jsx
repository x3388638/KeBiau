import React from 'react';
import {
	Table,
	Button
} from 'reactstrap';

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
				</select>
				<a className="float-right mr-2 text-warning" href="http://ccweb.ncnu.edu.tw/student/DeptQuerylist.asp#tbl_DeptQuerylist" target="_blank" rel="noopener noreferrer">
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
					<Table hover responsive striped>
						<thead>
							<tr>
								<th>課號</th>
								<th>課程名稱</th>
								<th>班別</th>
								<th>時段</th>
								<th>授課地點</th>
								<th>教師</th>
								<th>年級</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{
								Object.keys(list).map((val) => {
									return (
										<tr key={val} data-uuid={val}>
											<td>{list[val].cid}</td>
											<td>{list[val].cname}</td>
											<td>{list[val].classes}</td>
											<td>{list[val].time}</td>
											<td>{list[val].location}</td>
											<td>{list[val].teacher}</td>
											<td>{list[val].grade}</td>
											<td>
												<a href={`https://ccweb.ncnu.edu.tw/student/aspmaker_course_opened_detail_viewview.asp?zyear=${list[val].year}&courseid=${list[val].cid}&zclass=${list[val].classes}`} target="_blank">課綱 <i className="fa fa-external-link" aria-hidden="true"></i></a>
											</td>
											<td>
												<Button color="success" size="sm" disabled={list[val].isConflict ? true : false} onClick={() => {this.props.onAddCourse(list[val], true)}}>{list[val].isConflict ? '衝堂' : '加入'}</Button>
											</td>
										</tr>
									);
								})
							}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
