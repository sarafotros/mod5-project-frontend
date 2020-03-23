import React from 'react';
import BigBanner from '../components/BigBanner';
import HandymanBanner from '../components/HandymanBanner';
import Categories from './Categories'

const HomePage = () => {
	return (
		<>
			<BigBanner />
			<Categories />
			<HandymanBanner />
		</>
	);
};
export default HomePage;
