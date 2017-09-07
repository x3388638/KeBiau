import React from 'react';
import {
	Table
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
			</div>
		)
	}
}

export default class CourseList extends React.Component {
	render() {
		return (
			<div>
				<DeptSelector { ...this.props } />
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
						<tr>
							<td>010004</td>
							<td>中國史</td>
							<td>0</td>
							<td>1bcd</td>
							<td>人107</td>
							<td>John</td>
							<td>1</td>
							<td>大綱</td>
							<td>加入</td>
						</tr><tr>
							<td>010004</td>
							<td>中國史</td>
							<td>0</td>
							<td>1bcd</td>
							<td>人107</td>
							<td>John</td>
							<td>1</td>
							<td>大綱</td>
							<td>加入</td>
						</tr><tr>
							<td>010004</td>
							<td>中國史</td>
							<td>0</td>
							<td>1bcd</td>
							<td>人107</td>
							<td>John</td>
							<td>1</td>
							<td>大綱</td>
							<td>加入</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}
