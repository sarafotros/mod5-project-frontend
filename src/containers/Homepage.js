import React from 'react';
import BigBanner from '../components/BigBanner';
import HandymanBanner from '../components/HandymanBanner';

const HomePage = () => {
	return (
		<>
			<BigBanner />
			<div style={{ height: 200 }}>
				<div>
					Icons made by{' '}
					<a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
						Eucalyp
					</a>{' '}
					from{' '}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
			</div>
			<HandymanBanner />
		</>
	);
};
export default HomePage;
