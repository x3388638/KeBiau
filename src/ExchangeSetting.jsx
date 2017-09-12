import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardBlock,
	Label,
	Input,
	Button
} from 'reactstrap';
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css';
import './ExchangeSetting.css';

export default class ExchangeSetting extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			wantTags: [],
			haveTags: [],
			filterTags: []
		};

		this.handleChangeWant = this.handleChangeWant.bind(this);
		this.handleChangeHave = this.handleChangeHave.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);
	}

	handleChangeWant(wantTags) {
		this.setState({
			wantTags
		});
	}

	handleChangeHave(haveTags) {
		this.setState({
			haveTags
		});
	}

	handleChangeFilter(filterTags) {
		this.setState({
			filterTags
		});
	}

	render() {
		const containerStyle = {
			background: '#fff',
			boxShadow: '0 0 5px 0 #888888',
			position: 'absolute',
			width: '100%',
			zIndex: 1,
			left: 0
		};

		return (
			<Container className="pt-3 pb-2" style={containerStyle}>
				<Row>
					<Col xs="12">
						<h5>設定個人換課資訊</h5>
						<Card>
							<CardBlock>
								<Row id="ExchangeSetting">
									<Col className="d-inline-block" xs="4">
										<Label for="ExchangeSetting__inputWant">想要的課</Label>
										<TagsInput className="form-control" id="ExchangeSetting__inputWant" value={this.state.wantTags} onChange={this.handleChangeWant} />
									</Col>
									<Col className="d-inline-block" xs="4">
										<Label for="ExchangeSetting__inputHave">不需要的課</Label>
										<TagsInput className="form-control" id="ExchangeSetting__inputHave" value={this.state.haveTags} onChange={this.handleChangeHave} />
									</Col>
									<Col className="d-inline-block" xs="4">
										<Label for="ExchangeSetting__inputDesc">補充說明</Label>
										<Input type="textarea" id="ExchangeSetting__inputDesc" rows="1" />
									</Col>
								</Row>
								<Row className="mt-2">
									<Col xs="12">
										<Button className="float-right" size="sm" color="danger">取消發佈</Button>
										<Button className="float-right mr-2" size="sm" color="primary">儲存並發佈</Button>
									</Col>
								</Row>
							</CardBlock>
						</Card>
						<hr />
						<h5>過濾課程名稱</h5>
						<Row>
							<Col xs="9">
								<TagsInput className="form-control" id="Filter__input" value={this.state.filterTags} onChange={this.handleChangeFilter} />
							</Col>
							<Col className="text-center" xs="3">
								<Button size="sm" outline color="primary" style={{verticalAlign: 'sub'}}>
									<i className="fa fa-filter" aria-hidden="true"></i> <span className="hidden-sm-down">過濾</span>
								</Button>{' '}
								<Button size="sm" outline color="secondary" style={{verticalAlign: 'sub'}}>
								<i className="fa fa-refresh" aria-hidden="true"></i> <span className="hidden-sm-down">清除</span></Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}
