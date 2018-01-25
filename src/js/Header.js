import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<div className="row">
		<div className="twelve columns">
			<header className="header">
				<div className="header-inner">
					<h1 className="logo">
						<Link to="/workouts">
							<span className="logo-light">my</span>Lvfts
						</Link>
					</h1>
					<Link className="exit-btn" to="/">
						<i className="material-icons">close</i>
					</Link>
				</div>
			</header>
		</div>
	</div>
);

export default Header;
