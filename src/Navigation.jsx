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
import PropTypes from 'prop-types';

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
					<NavbarToggler right onClick={this.toggle} />
					<NavbarBrand href="/">自己的課表自己排 2.0</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<NavItem>
								<Link className={route.match.path === '/' ? 'active nav-link' : ' nav-link'} to="/">我的課表</Link>
							</NavItem>
							<NavItem>
								<Link className={route.match.path === '/exchange' ? 'active nav-link' : ' nav-link'} to="/exchange">換課平台</Link>
							</NavItem>
						</Nav>
						<Nav className="ml-auto" navbar>
							{
								loginStatusInit && isLogin &&
								<NavItem>
									<NavLink href={`https://fb.com/${user.uid}`} target="_blank">{user.displayName}</NavLink>
								</NavItem>
							}
							{
								loginStatusInit &&
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
				{JSON.stringify(this.context.router)}
			</div>
		);
	}
}

Navigation.contextTypes = {
	user: PropTypes.object,
	router: PropTypes.object
};
