import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Workouts extends React.Component {
	constructor(props) {
		super(props);
	}

	// set state for completed excersises somewhere within the app

	state = {
		workout: ''
	};

	handleGetWorkout = event => {
		this.setState({
			workout: event.target.textContent
		});
	};

	render() {
		return (
			<div className="s-container">
				<Header />
				<div className="row workouts-wrap">
					<div className="twelve columns workouts">
						{this.props.workouts.map((workout, index) => {
							return (
								<div
									className={`${workout.title.substr(
										0,
										workout.title.indexOf(' ')
									)} workout`.toLowerCase()}
									key={workout.id}
								>
									{/* link to the actual workout page */}
									<Link
										key={workout.id}
										onClick={this.handleGetWorkout}
										to={`/workout/${workout.id}`}
										className="workout-btn"
									>
										<h3 className="workout-bold">
											{workout.title.substr(0, workout.title.indexOf(' '))}
										</h3>
										{workout.title.substr(workout.title.indexOf(' '))}
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Workouts;
