import React from 'react';
import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${ props => `${ props.marginTop || 20 }px` };
`;

export default class Loading extends React.PureComponent {
	render() {
		return (
			<LoadingWrapper {...this.props}>
				<BarLoader
					color="#666"
					loading
					height={ 5 }
					width={ 200 }
				/>
			</LoadingWrapper>
		)
	}
}
