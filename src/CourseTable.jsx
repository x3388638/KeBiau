import React from 'react';
import {
	Table
} from 'reactstrap';

export default class CourseTable extends React.Component {
	render() {
		const timeNo = ['a/08', 'b/09', 'c/10', 'd/11', 'z/12', 'e/13', 'f/14', 'g/15', 'h/16', 'i/17', 'j/18', 'k/19', 'l/20', 'm/21'];
		return (
			<div>
				<Table bordered responsive size="sm" style={{background: '#fff', tableLayout: 'fixed'}}>
					<thead>
						<tr>
							<th style={{width: '60px'}}></th>
							<th className="text-center" style={{width: 'auto'}}>星期一</th>
							<th className="text-center" style={{width: 'auto'}}>星期二</th>
							<th className="text-center" style={{width: 'auto'}}>星期三</th>
							<th className="text-center" style={{width: 'auto'}}>星期四</th>
							<th className="text-center" style={{width: 'auto'}}>星期五</th>
							{
								this.props.tableData.sat &&
								<th className="text-center" style={{width: 'auto'}}>星期六</th>
							}
							{
								this.props.tableData.sun &&
								<th className="text-center" style={{width: 'auto'}}>星期日</th>
							}
						</tr>
					</thead>
					<tbody>
						{
							timeNo.map((t, i) => {
								return (
									<tr key={i}>
										<td className="text-center">{t}</td>
										{
												Object.values(this.props.tableData.course[t]).map((val, i) => {
													return (
														<td key={i}>{JSON.stringify(val)}</td>
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
