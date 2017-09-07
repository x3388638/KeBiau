import React from 'react';
import {
	Table
} from 'reactstrap';

export default class CourseTable extends React.Component {
	render() {
		const timeNo = ['a/08', 'b/09', 'c/10', 'd/11', 'z/12', 'e/13', 'f/14', 'g/15', 'h/16', 'i/17', 'j/18', 'k/19', 'l/20'];
		return (
			<div>
				<Table bordered responsive>
					<thead>
						<tr>
							<th style={{width: '60px'}}></th>
							<th>mon</th>
							<th>tue</th>
							<th>wed</th>
							<th>thu</th>
							<th>fri</th>
						</tr>
					</thead>
					<tbody>
						{
							timeNo.map((val, i) => {
								return (
									<tr key={i}>
										<td>{val}</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
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
