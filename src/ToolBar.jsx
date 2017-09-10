import React from 'react';
import {
	Button
} from 'reactstrap';

export default class ToolBar extends React.Component {
	render() {
		const btnStyle = {cursor: 'pointer', marginBottom: '5px'};
		return (
			<div>
				<Button color="primary" size="sm" className="mr-1" style={btnStyle}>
					<i className="fa fa-floppy-o" aria-hidden="true"></i> <span className="hidden-xs-down">儲存</span>
				</Button> 
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle}>
					<i className="fa fa-file-excel-o" aria-hidden="true"></i> <span className="hidden-xs-down">匯出為 .xls</span>
				</Button> 
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle}>
					<i className="fa fa-file-image-o" aria-hidden="true"></i> <span className="hidden-xs-down">匯出為 .png</span>
				</Button>
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle}>
					<i className="fa fa-share-square-o" aria-hidden="true"></i> <span className="hidden-xs-down">分享</span>
				</Button>
				<span className="ml-2 mr-2"></span>	
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle}>
					<i className="fa fa-repeat" aria-hidden="true"></i> <span className="hidden-xs-down">清除顏色</span>
				</Button>
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle}>
					<i className="fa fa-plus" aria-hidden="true"></i> <span className="hidden-xs-down">自訂時段</span>
				</Button>
			</div>
		);
	}
}
