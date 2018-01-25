import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => (
	<div className="s-container landing">
		<div className="row">
			<Header />
			<div className="twelve columns">
				<div className="intro-msg-wrap">
					<h1 className="intro-msg">
						<span className="intro-msg-light">Life.</span>
						My Way.
					</h1>
					<p className="about-msg">Designed and Engineered by Devin Harris.</p>
					<Link className="enter-btn" to={`${process.env.PUBLIC_URL}/workouts`}>
						Enter
					</Link>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
