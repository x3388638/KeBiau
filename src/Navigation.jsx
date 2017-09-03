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
								<NavLink className={this.props.match.path === '/' ? 'active' : ''} href="/">我的課表</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={this.props.match.path === '/exchange' ? 'active' : ''} href="/exchange">換課平台</NavLink>
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
