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
	render() {
		return (
			<div>
				<Navbar color="inverse" light inverse toggleable>
					<NavbarToggler right onClick={this.toggle} />
					<NavbarBrand href="/">自己的課表自己排</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link className={this.props.match.path === '/' ? 'active nav-link' : ' nav-link'} to="/">我的課表</Link>
							</NavItem>
							<NavItem>
								<Link className={this.props.match.path === '/exchange' ? 'active nav-link' : ' nav-link'} to="/exchange">換課平台</Link>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/x3388638/KeBiau" target="_blank">Github</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
