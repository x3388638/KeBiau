import React from 'react';
import {
	Table
} from 'reactstrap';

import CourseGrid from './CourseGrid';

import './CourseTable.css';

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
									星期六 <i className="fa fa-times-circle text-danger" id="SatTitle__btnDel" aria-hidden="true" onClick={() => {!this.props.shared && this.props.onDelSatOrSun('sat')}}></i>
								</th>
							}

							{
								this.props.tableData.sun &&
								<th className="text-center" id="SunTitle" style={{width: 'auto'}}>
									星期日 <i className="fa fa-times-circle text-danger" id="SunTitle__btnDel" aria-hidden="true" onClick={() => {!this.props.shared &&this.props.onDelSatOrSun('sun')}}></i>
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
														shared={this.props.shared}
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
