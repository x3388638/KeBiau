import React from 'react';
import {
	Button
} from 'reactstrap';

export default class ToolBar extends React.Component {
	handleExportExcel(e) {
		document.querySelectorAll('.uniBR').forEach((val) => {
			val.setAttribute('style', 'mso-data-placement:same-cell');
		});
		const html= '<html><head><meta charset="utf-8"></head><body>' + document.getElementById('CustomTable').parentNode.innerHTML + '</body></html>';
		window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
		e.preventDefault();
	}

	handleExportPNG() {
		window.html2canvas(document.querySelectorAll('#CustomTable'), {
			onrendered: function (canvas) {
				//
			}
		});
		window.html2canvas(document.querySelectorAll('#CustomTable'), {
			onrendered: function (canvas) {
				window.Canvas2Image.saveAsPNG(canvas);
			}
		});
	}

	render() {
		const btnStyle = {cursor: 'pointer', marginBottom: '5px'};
		return (
			<div>
				<Button color="primary" size="sm" className="mr-1" style={btnStyle} onClick={this.props.onSave}>
					<i className="fa fa-floppy-o" aria-hidden="true"></i> <span className="hidden-xs-down">儲存</span>
				</Button> 
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle} onClick={this.handleExportExcel}>
					<i className="fa fa-file-excel-o" aria-hidden="true"></i> <span className="hidden-xs-down">匯出為 .xls</span>
				</Button> 
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle} onClick={this.handleExportPNG}>
					<i className="fa fa-file-image-o" aria-hidden="true"></i> <span className="hidden-xs-down">匯出為 .png</span>
				</Button>
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle} onClick={this.props.onShare}>
					<i className="fa fa-share-square-o" aria-hidden="true"></i> <span className="hidden-xs-down">分享</span>
				</Button>
				<span className="ml-2 mr-2"></span>	
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle} onClick={this.props.onReColor}>
					<i className="fa fa-repeat" aria-hidden="true"></i> <span className="hidden-xs-down">清除標記</span>
				</Button>
				<Button color="secondary" size="sm" className="mr-1" style={btnStyle} onClick={this.props.onClickCustom}>
					<i className="fa fa-plus" aria-hidden="true"></i> <span className="hidden-xs-down">自訂時段</span>
				</Button>
			</div>
		);
	}
}
