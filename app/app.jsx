var React = require('react'),
	ReactDOM = require('react-dom'),
	Home = require('./components/Home');

require('./styles/app.scss');

ReactDOM.render(
	<Home/>
, document.querySelector('.container'));
