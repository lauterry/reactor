jest.dontMock('../app/components/Home.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('../app/components/Home.jsx');
var TestUtils = require('react-addons-test-utils');

describe('Home', function () {
	var home;

	beforeEach(function () {
		home = TestUtils.renderIntoDocument(
			<Home/>
		);
	});

	it('should display a title', function () {
		var titleNode = TestUtils.findRenderedDOMComponentWithClass(home, 'home_title');
		expect(ReactDOM.findDOMNode(titleNode).textContent).toEqual('React + Webpack Starter Kit');
	});

	it('should display a button', function () {
		var buttonNode = TestUtils.findRenderedDOMComponentWithClass(home, 'home_button');
		expect(ReactDOM.findDOMNode(buttonNode).textContent).toEqual("Learn more");
	});
});
