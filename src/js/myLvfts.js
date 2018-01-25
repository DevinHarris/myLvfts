import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Workouts from './Workouts';
import Workout from './Workout';
import Exercise from './Exercise';
import CreateWorkout from './CreateWorkout';
import data from '../../data.json';

// 404 page component

const _404 = () => <h1>Sorry, that page was not found.</h1>;

const App = () => (
	<BrowserRouter>
		<div className="mylvfts">
			<Switch>
				{/* sharing state  */}
				<Route exact path="/" component={Home} />
				<Route exact path="/workouts" component={props => <Workouts workouts={data.workouts} />} />
				{/* <Route exact path="/workout/:id" component={} /> */}
				<Route
					exact
					path="/workout/:id"
					component={props => {
						// passing the data as a prop to the Workout component
						const matchedWorkout = data.workouts.find(workout => {
							return props.match.params.id === workout.id;
						});

						console.log(matchedWorkout);

						return <Workout workout={matchedWorkout} />;
					}}
				/>
				<Route exact path="/create" component={CreateWorkout} />
				<Route component={_404} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
