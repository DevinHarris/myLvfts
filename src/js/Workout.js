import React from 'react';
import YouTube from 'react-youtube';
import Header from './Header';

class Workout extends React.Component {
	state = {
		workout: this.props.workout,
		exercises: this.props.workout.workouts
	};

	/*handleUndoRemoveExercise = event => {
		this.setState((prevState, props) => {
			exercises: prevState.exercises;
		});
		console.log('clicked');
	};*/

	handleFinishedEvent = event => {
		// add code to save state to localstorage
		// add code to reset to add the default exercises back
		// when exercises count === 0 show workout complete msg
		let matchId = event.target.getAttribute('data-id');
		// I hate myself for this.
		//topLevelParent = target.parentNode.parentNode.parentNode.parentNode.parentNode;

		//topLevelParent.classList.add('fadeOut');

		this.setState((prevState, props) => {
			return {
				exercises: prevState.exercises.filter(exercise => {
					return exercise.id !== matchId;
				})
			};
		});

		//console.log(topLevelParent);
	};

	render() {
		return (
			<div>
				<Header />
				<div className="row workout-header">
					<div className="twelve columns">
						<h1 className="workout-title">{this.state.workout.title}</h1>
						<h5>{`${this.state.exercises.length} Exercises`}</h5>
						{/*<button onClick={this.handleUndoRemoveExercise}>Undo</button> */}
					</div>
				</div>
				<div className="row workout-wrap">
					<div className="twelve columns">
						<div className="exercise-flex">
							<div className="exercise-wrap">
								{this.state.exercises.map(split => {
									{
										/* console.log(split); */
									}
									return (
										<div key={split.id}>
											{split.title ? <h3 className="split-title">{split.title}</h3> : null}

											<div className="card" key={split.id}>
												<div className="row">
													<div className="six columns">
														<div className="exercise-meta">
															<h4 className="exercise-title">{split.name}</h4>
															<p className="scheme">{`Sets: ${split.sets} Reps: ${
																split.reps
															}`}</p>
															{split.notes ? (
																<p className="exercise-notes">{`Notes: ${
																	split.notes
																}`}</p>
															) : null}

															<div className="finish-btn-wrap">
																<button
																	onClick={this.handleFinishedEvent}
																	className="finish-btn"
																	data-id={split.id}
																>
																	finished
																</button>
															</div>
														</div>
													</div>

													<div className="six columns card-video">
														{split.youtubeID ? (
															<div className="form-video-wrap">
																<YouTube
																	videoId={split.youtubeID}
																	className="form-video"
																/>
															</div>
														) : null}
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Workout;
