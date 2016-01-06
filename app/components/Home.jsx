var React = require('react');
var axios = require('axios');

var Home = React.createClass({

	getInitialState: function () {
		return {
			message: ''
		}
	},

	componentWillMount: function () {
		axios.get('/server/status')
			.then(function () {
				this.setState({
					message : "Congratulation ! you're ready to develop !"
				})
			}.bind(this))
			.catch(function () {
				this.setState({
					message : "Congratulation ! you're ready to develop but your server is not started yet. Run node server to start it !"
				})
			}.bind(this));
	},

	render: function () {
		return (
			<div className="jumbotron home">
				<h1 className="home_title">React + Webpack Starter Kit</h1>
				<p className="home_text">{this.state.message}</p>
				<p><a className="btn btn-primary btn-lg home_button" href="https://github.com/lauterry/reactor">Learn more</a></p>
			</div>
		)
	}
});

module.exports = Home;
