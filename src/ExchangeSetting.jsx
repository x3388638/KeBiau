import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardBlock,
	Label,
	Input
} from 'reactstrap';
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css';
import './ExchangeSetting.css';

export default class ExchangeSetting extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			wantTags: [],
			haveTags: []
		};

		this.handleChangeWant = this.handleChangeWant.bind(this);
		this.handleChangeHave = this.handleChangeHave.bind(this);
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
										<Label for="ExchangeSetting__inputWant">想要什麼課？</Label>
										<TagsInput className="form-control" id="ExchangeSetting__inputWant" value={this.state.wantTags} onChange={this.handleChangeWant} />
									</Col>
									<Col className="d-inline-block" xs="4">
										<Label for="ExchangeSetting__inputHave">手上有什麼不要的課？</Label>
										<TagsInput className="form-control" id="ExchangeSetting__inputHave" value={this.state.haveTags} onChange={this.handleChangeHave} />
									</Col>
									<Col className="d-inline-block" xs="4">
										<Label for="ExchangeSetting__inputDesc">補充說明</Label>
										<Input type="textarea" id="ExchangeSetting__inputDesc" rows="1" />
									</Col>
								</Row>
							</CardBlock>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
