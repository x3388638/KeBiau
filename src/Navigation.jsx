import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Tooltip,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.toggleLoginTooltip = this.toggleLoginTooltip.bind(this);
		this.toggleLogoutTooltip = this.toggleLogoutTooltip.bind(this);
		this.state = {
			navbarIsOpen: false,
			loginTooltip: false,
			logoutTooltip: false,
		};
	}

	toggleNavbar() {
		this.setState({
			navbarIsOpen: !this.state.navbarIsOpen
		});
	}

	toggleLoginTooltip() {
		this.setState({
			loginTooltip: !this.state.loginTooltip
		});
	}

	toggleLogoutTooltip() {
		this.setState({
			logoutTooltip: !this.state.logoutTooltip
		});
	}

	handleLogin() {
		const provider = new window.firebase.auth.FacebookAuthProvider();
		window.firebase.auth().signInWithPopup(provider).then(function(result) {
			window.location.reload();
		}).catch(function(error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(`[${errorCode}] ${errorMessage}`)
		});
	}

	handleLogout() {
		window.firebase.auth().signOut().then(function() {
			window.location.reload();
		}).catch(function(error) {
			console.error(error);
		});
	}

	render() {
		const route = this.context.router.route;
		const user = this.context.user;
		const loginStatusInit = !!user;
		const isLogin = loginStatusInit && !!user.uid;
		return (
			<div>
				<Navbar color="inverse" light inverse toggleable>
					<NavbarToggler right onClick={this.toggleNavbar} />
					<NavbarBrand href="/">自己的課表自己排 2.0</NavbarBrand>
					<Collapse isOpen={this.state.navbarIsOpen} navbar>
						<Nav navbar>
							<NavItem>
								<Link className={route.match.path === '/' ? 'active nav-link' : ' nav-link'} to="/">
									<i className="fa fa-table" aria-hidden="true"></i> 我的課表
								</Link>
							</NavItem>
							<NavItem>
								<Link className={route.match.path === '/exchange' ? 'active nav-link' : ' nav-link'} to="/exchange">
									<i className="fa fa-exchange" aria-hidden="true"></i> 換課平台
								</Link>
							</NavItem>
						</Nav>
						<Nav className="ml-auto" navbar>
							{
								loginStatusInit && isLogin &&
								<NavItem>
									<NavLink href={`https://fb.com/${user.uid}`} target="_blank">
										<img src={`http://graph.facebook.com/${user.uid}/picture`} alt="" height="20" />
										<span className="ml-2">{user.displayName}</span>
									</NavLink>
								</NavItem>
							}
							{
								loginStatusInit &&
								<NavItem>
									{
										isLogin &&
										<NavLink id="LogoutBtn" href="#" onClick={this.handleLogout}>
											<i className="fa fa-sign-out" aria-hidden="true"></i>
											<Tooltip delay={{ show: 0, hide: 0 }} placement="left" isOpen={this.state.logoutTooltip} target="LogoutBtn" toggle={this.toggleLogoutTooltip}>
												登出
											</Tooltip>
										</NavLink>
									}
									{
										isLogin ||
										<NavLink id="LoginBtn" href="#" onClick={this.handleLogin}>
											<i className="fa fa-facebook-square" aria-hidden="true"></i>
											<Tooltip delay={{ show: 0, hide: 0 }} placement="left" isOpen={this.state.loginTooltip} target="LoginBtn" toggle={this.toggleLoginTooltip}>
												登入 Facebook
											</Tooltip>
										</NavLink>
									}
								</NavItem>
							}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

Navigation.contextTypes = {
	user: PropTypes.object,
	router: PropTypes.object
};
