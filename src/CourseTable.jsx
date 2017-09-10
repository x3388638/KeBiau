import React from 'react';
import {
	Table
} from 'reactstrap';

import './CourseTable.css';

class CourseGrid extends React.Component {
	constructor(props) {
		super(props);
		this.handleDel = this.handleDel.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleDel(e) {
		const time = e.target.parentNode.parentNode.parentNode.getAttribute('data-time');
		const rowspan = e.target.parentNode.parentNode.getAttribute('rowspan');
		this.props.onDelCourse(time, rowspan, this.props.dayOfWeek);
	}

	handleEdit(e) {
		this.props.onEditCourse({
			time: e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-time'),
			dayOfWeek: this.props.dayOfWeek,
			title: this.props.title,
			desc: this.props.desc,
			bg: this.props.bg,
		});
	}

	render() {
		let gridStyle = {
			verticalAlign: 'middle'
		};

		this.props.bg && (gridStyle.background = this.props.bg);
		return (
			<td className="CustomTable__grid" style={gridStyle} rowSpan={this.props.rowspan || 1}>
				{ this.props.title &&
					<span className="float-right mr-2">
						<span className="CustomTable__grid__btnDel text-danger" onClick={this.handleDel}>&times;</span><br />
						<span style={{top: '-8px', position: 'relative'}}><i className="fa fa-pencil CustomTable__grid__btnEdit" aria-hidden="true" onClick={this.handleEdit}></i></span>
					</span>
				}

				{ this.props.title && 
					<div className="title">{this.props.title}</div>
				}

				{ this.props.desc && 
					<div className="desc">{this.props.desc}</div>
				}
			</td>
		)
	}
}

export default class CourseTable extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		const classArr = document.getElementById('CustomTable').className.replace('table-bordered', '').trim().split(' ');
		document.getElementById('CustomTable').className = classArr.join(' ');
		setTimeout(() => {
			document.getElementById('CustomTable').className += ' table-bordered';
		}, 1);
	}

	render() {
		const timeNo = ['a/08', 'b/09', 'c/10', 'd/11', 'z/12', 'e/13', 'f/14', 'g/15', 'h/16', 'i/17', 'j/18', 'k/19', 'l/20', 'm/21'];
		return (
			<div>
				<Table id="CustomTable" bordered responsive size="sm" style={{background: '#fff', tableLayout: 'fixed'}}>
					<thead>
						<tr>
							<th style={{width: '60px'}}></th>
							<th className="text-center">星期一</th>
							<th className="text-center">星期二</th>
							<th className="text-center">星期三</th>
							<th className="text-center">星期四</th>
							<th className="text-center">星期五</th>
							{
								this.props.tableData.sat &&
								<th className="text-center" id="SatTitle" style={{width: 'auto'}}>
									星期六 <i className="fa fa-times-circle text-danger" id="SatTitle__btnDel" aria-hidden="true" onClick={() => {this.props.onDelSatOrSun('sat')}}></i>
								</th>
							}

							{
								this.props.tableData.sun &&
								<th className="text-center" id="SunTitle" style={{width: 'auto'}}>
									星期日 <i className="fa fa-times-circle text-danger" id="SunTitle__btnDel" aria-hidden="true" onClick={() => {this.props.onDelSatOrSun('sun')}}></i>
								</th>
							}
						</tr>
					</thead>
					<tbody>
						{
							timeNo.map((t, i) => {
								return (
									<tr data-time={t} key={i}>
										<th className="text-center">{t}</th>
										{
											Object.keys(this.props.tableData.course[t]).map((key, i) => {
												const courseData = this.props.tableData.course[t][key];
												if (courseData === null) {
													return null;
												}

												if (!this.props.tableData.sat && key === '5') {
													return null;
												}

												if (!this.props.tableData.sun && key === '6') {
													return null;
												}

												return (
													<CourseGrid
														{...courseData}
														key={i}
														dayOfWeek={key}
														onDelCourse={this.props.onDelCourse}
														onEditCourse={this.props.onEditCourse}
													/>
												)
											})
										}
									</tr>
								)
							})
						}
					</tbody>
				</Table>
			</div>
		);
	}
}
