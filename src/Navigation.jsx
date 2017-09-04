import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleLogin() {
		window.FB.login(function (res) {
			if (res.authResponse) {
				window.location.reload();
			}
		});
	}

	handleLogout() {
		window.FB.logout(function (res) {
			window.location.reload();
		});
	}

	render() {
		const fbInit = !!this.props.user;
		const isLogin = fbInit && !!this.props.user.name && !!this.props.user.id;
		return (
			<div>
				<Navbar color="inverse" light inverse toggleable>
					<NavbarToggler right onClick={this.toggle} />
					<NavbarBrand href="/">自己的課表自己排 2.0</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<NavItem>
								<Link className={this.props.match.path === '/' ? 'active nav-link' : ' nav-link'} to="/">我的課表</Link>
							</NavItem>
							<NavItem>
								<Link className={this.props.match.path === '/exchange' ? 'active nav-link' : ' nav-link'} to="/exchange">換課平台</Link>
							</NavItem>
						</Nav>
						<Nav className="ml-auto" navbar>
							{
								fbInit && isLogin &&
								<NavItem>
									<NavLink href={`https://fb.com/${this.props.user.id}`} target="_blank">{this.props.user.name}</NavLink>
								</NavItem>
							}
							{
								fbInit &&
								<NavItem>
									{
										isLogin &&
										<NavLink href="#" onClick={this.handleLogout}>登出</NavLink>
									}
									{
										isLogin ||
										<NavLink href="#" onClick={this.handleLogin}>登入</NavLink>
									}
								</NavItem>
							}
						</Nav>
					</Collapse>
				</Navbar>
				{JSON.stringify(this.context.user)}
			</div>
		);
	}
}
