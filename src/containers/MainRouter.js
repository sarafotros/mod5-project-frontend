import React from 'react';
import {  Route } from 'react-router-dom'
import HomePage from './Homepage';
import Services from './Services'

function MainRouter() {
    return (
        <>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/services">
            <Services />
            </Route>
        </>
		);
}
export default MainRouter ;