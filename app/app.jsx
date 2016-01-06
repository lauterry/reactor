require('./styles/app.scss');

var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/Home');

ReactDOM.render(
	<Home></Home>
, document.querySelector('.container'));
