import React from 'react';
import styled from 'styled-components';

const EditBtnContainer = styled.span`
	top: -8px;
	position: relative;
`;

const DelBtn = styled.span`
	display: none;
	cursor: pointer;
	color: #c9302c !important;
	font-size: 20px;
`;

const EditBtn = styled.i`
	display: none;
	cursor: pointer;
	font-size: 14px;
	&:hover {
		color: #0275d8;
	}
`;

const Grid = styled.td`
	vertical-align: middle !important;
	background: ${(props) => `${props.bg} !important` || 'none'};
	color: ${ _getTextColor};
	&:hover {
		background: #fafafa;
		${ DelBtn} {
			display: initial;
		}

		${ EditBtn} {
			display: initial;
		}
	}
`;

function _getTextColor(props) {
	if (props.bg) {
		const { r, g, b } = _hexToRgb(props.bg);
		const bri = Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068);
		if (bri < 125) {
			return '#fff';
		}

		return '';
	}

	return '';
}

function _hexToRgb(hex) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

export default class CourseGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mouseEnter: false
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleDel = this.handleDel.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleMouseEnter() {
		this.setState({
			mouseEnter: true
		});
	}

	handleMouseLeave() {
		this.setState({
			mouseEnter: false
		});
	}

	handleDel(e) {
		if (this.props.shared) return;
		const time = e.target.parentNode.parentNode.parentNode.getAttribute('data-time');
		const rowspan = e.target.parentNode.parentNode.getAttribute('rowspan');
		this.props.onDelCourse(time, rowspan, this.props.dayOfWeek);
	}

	handleEdit(e) {
		if (this.props.shared) return;
		this.props.onEditCourse({
			time: e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-time'),
			dayOfWeek: this.props.dayOfWeek,
			title: this.props.title,
			desc: this.props.desc,
			bg: this.props.bg,
		});
	}

	hexToRgb(hex) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	render() {
		return (
			<Grid bg={this.props.bg} rowSpan={this.props.rowspan || 1} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				{!this.props.shared && this.props.title && this.state.mouseEnter &&
					<span className="float-right mr-2">
						<DelBtn className="text-danger" onClick={this.handleDel}>&times;</DelBtn><br />
						<EditBtnContainer>
							<EditBtn className="fa fa-pencil" aria-hidden="true" onClick={this.handleEdit}></EditBtn>
						</EditBtnContainer>
					</span>
				}

				{this.props.title && this.props.title}
				<br className="uniBR" />
				{this.props.desc && this.props.desc}
			</Grid>
		)
	}
}
