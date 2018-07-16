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
import styled from 'styled-components';

const NavigationBar = styled(Navbar)`
	z-index: 5;
	padding: '0.3rem 1rem';
`;

const UserImg = styled.img`
	border-radius: 50px;
`;

const UserName = styled.span`
	@media (max-width: 900px) and (min-width: 576px) {
		display: none;
	}
`;

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
		this.setState((prevState) => ({
			navbarIsOpen: !prevState.navbarIsOpen
		}));
	}

	toggleLoginTooltip() {
		this.setState((prevState) => ({
			loginTooltip: !prevState.loginTooltip
		}));
	}

	toggleLogoutTooltip() {
		this.setState((prevState) => ({
			logoutTooltip: !prevState.logoutTooltip
		}));
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
			<NavigationBar color="dark" dark expand="sm">
				<NavbarBrand href={process.env.REACT_APP_BASE_URL}>
					<img src={`${process.env.REACT_APP_BASE_URL}/logo.png`} alt="" height="31px"/> 自己的課表自己排 2.0
				</NavbarBrand>
				<NavbarToggler right onClick={this.toggleNavbar} />
				<Collapse isOpen={this.state.navbarIsOpen} navbar>
					<Nav navbar>
						<NavItem>
							<Link className={route.match.path === '/' ? 'active nav-link' : ' nav-link'} to="/">
								<i className="fa fa-table" aria-hidden="true"></i> <span className="d-sm-none d-md-inline">我的課表</span>
							</Link>
						</NavItem>
						<NavItem>
							<Link className={route.match.path === '/exchange' ? 'active nav-link' : ' nav-link'} to="/exchange">
								<i className="fa fa-exchange" aria-hidden="true"></i> <span className="d-sm-none d-md-inline">換課平台</span>
							</Link>
						</NavItem>
						<NavItem>
							<Link className={route.match.path === '/review' ? 'active nav-link' : ' nav-link'} to="/review">
								<i className="fa fa-thumbs-up" aria-hidden="true"></i> <span className="d-sm-none d-md-inline">課程評價</span>
							</Link>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/x3388638/KeBiau/issues" target="_blank">
								<span>
									<i className="fa fa-exclamation-circle" aria-hidden="true"></i> <span className="d-sm-none d-md-inline">回報</span>
								</span>
							</NavLink>
						</NavItem>
					</Nav>
					<Nav className="ml-auto" navbar>
						{
							loginStatusInit && isLogin &&
							<NavItem>
								<NavLink href={`https://fb.com/${user.uid}`} target="_blank">
									<UserImg src={`https://graph.facebook.com/${user.uid}/picture`} alt="" height="21" />
									<UserName className="ml-2">{ user.displayName }</UserName>
								</NavLink>
							</NavItem>
						}
						{
							loginStatusInit &&
							<NavItem>
								{
									isLogin &&
									<NavLink id="LogoutBtn" href="#" onClick={this.handleLogout}>
										<i className="fa fa-sign-out" aria-hidden="true"></i> <span className="d-inline d-sm-none">登出</span>
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
			</NavigationBar>
		);
	}
}

Navigation.contextTypes = {
	user: PropTypes.object,
	router: PropTypes.object
};
