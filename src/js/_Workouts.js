import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Workouts extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		workout: ''
	};

	handleGetWorkout = event => {
		this.setState({
			workout: event.target.textContent
		});

		console.log('clicked!');
		console.log(event.target.textContent);
	};

	render() {
		return (
			<div>
				<h1>
					<Link onClick={this.handleGetWorkout} to="/workouts">
						{this.props.title}
					</Link>
				</h1>
			</div>
		);
	}
}

export default Workouts;
