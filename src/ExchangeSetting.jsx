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
import TagsInput from 'react-tagsinput';
import PropTypes from 'prop-types';

import 'react-tagsinput/react-tagsinput.css';
import './ExchangeSetting.css';

export default class ExchangeSetting extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			wantTags: [],
			haveTags: [],
			desc: '',
			filterTags: [],
			published: false,
			settingOpen: true
		};

		this.handleChangeWant = this.handleChangeWant.bind(this);
		this.handleChangeHave = this.handleChangeHave.bind(this);
		this.handleChangeDesc = this.handleChangeDesc.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleToggleSetting = this.handleToggleSetting.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const exchangeSetting = nextProps.exchangeList[this.context.user.uuid] ? JSON.parse(nextProps.exchangeList[this.context.user.uuid]) : null;
		if (exchangeSetting) {
			this.setState({
				wantTags: exchangeSetting.want,
				haveTags: exchangeSetting.have,
				desc: exchangeSetting.desc,
				published: true
			})
		} else {
			this.setState({
				wantTags: [],
				haveTags: [],
				desc: '',
				published: false
			})
		}
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

	handleChangeDesc(e) {
		this.setState({
			desc: e.target.value
		});
	}

	handleChangeFilter(filterTags) {
		this.setState({
			filterTags
		});
	}

	handleSave() {
		if (!!this.state.haveTags.length || !!this.state.wantTags.length) {
			this.props.onSave(this.state.haveTags, this.state.wantTags, this.state.desc);
		} else {
			alert('請確保 Tag 有變成綠綠的 (於輸入框按下 Enter)');
		}
	}

	handleFilter(clear) {
		const keywords = this.state.filterTags;
		if (clear || !keywords.length) {
			if (!clear && !keywords.length) {
				alert('請確保 Tag 有變成綠綠的 (於輸入框按下 Enter)');
			}

			this.setState({
				filterTags: []
			});

			this.props.onFilter(null);
			return;
		}

		this.props.onFilter(keywords);
	}
	handleToggleSetting() {
		this.setState((prevState) => ({
			settingOpen: !prevState.settingOpen
		}));
	}

	render() {
		const containerStyle = {
			background: '#fff',
			boxShadow: '0 0 5px 0 #888888',
			position: 'absolute',
			width: '100%',
			zIndex: 1,
			left: 0,
			top: 0,
			transition: 'all .5s'
		};

		!this.state.settingOpen && (containerStyle.top = `-${document.getElementById('ExchangeSetting').offsetHeight + 32}px`);

		return (
			<Container className="pt-3" style={containerStyle}>
				<Row>
					<Col xs="12">
						<div id="ExchangeSetting">
							<h5>設定個人換課資訊</h5>
							<Card>
								<CardBlock>
									<Row>
										<Col className="d-inline-block" xs="4">
											<Label for="ExchangeSetting__inputWant">想要的課</Label>
											<TagsInput className="form-control" id="ExchangeSetting__inputWant" onlyUnique value={this.state.wantTags} onChange={this.handleChangeWant} />
										</Col>
										<Col className="d-inline-block" xs="4">
											<Label for="ExchangeSetting__inputHave">不需要的課</Label>
											<TagsInput className="form-control" id="ExchangeSetting__inputHave" onlyUnique value={this.state.haveTags} onChange={this.handleChangeHave} />
										</Col>
										<Col className="d-inline-block" xs="4">
											<Label for="ExchangeSetting__inputDesc">補充說明</Label>
											<Input type="textarea" id="ExchangeSetting__inputDesc" rows="1" value={this.state.desc} onChange={this.handleChangeDesc} />
										</Col>
									</Row>
									<Row className="mt-2">
										<Col xs="12">
											{ this.state.published &&
												<Button className="float-right" size="sm" color="danger" onClick={() => {this.props.onUnpublish();}}>取消發佈</Button>
											}

											<Button className="float-right mr-2" size="sm" color="primary" onClick={this.handleSave}>儲存並發佈</Button>
										</Col>
									</Row>
								</CardBlock>
							</Card>
						</div>
						<hr />
						<h5>過濾換課資訊</h5>
						<Row>
							<Col xs="9">
								<TagsInput className="form-control" id="Filter__input" onlyUnique value={this.state.filterTags} onChange={this.handleChangeFilter} />
							</Col>
							<Col className="text-center" xs="3">
								<Button size="sm" outline color="primary" style={{verticalAlign: 'sub'}} onClick={() => this.handleFilter(false)}>
									<i className="fa fa-filter" aria-hidden="true"></i> <span className="hidden-sm-down">過濾</span>
								</Button>{' '}
								<Button size="sm" outline color="secondary" style={{verticalAlign: 'sub'}} onClick={() => this.handleFilter(true)}>
								<i className="fa fa-refresh" aria-hidden="true"></i> <span className="hidden-sm-down">清除</span></Button>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col className="text-center" xs="12">
								<div id="btn-toggleSetting" onClick={this.handleToggleSetting}>
									<i className="fa fa-bars" aria-hidden="true"></i>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}

ExchangeSetting.contextTypes = {
	user: PropTypes.object
};
