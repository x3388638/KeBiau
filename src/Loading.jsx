import React from 'react';
import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

export default class Loading extends React.PureComponent {
	render() {
		return (
			<LoadingWrapper>
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
