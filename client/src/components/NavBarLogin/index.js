import React  from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const NavBarLogin = () => {

		//TODO Store Auth Client info in databases

		const login = () => {
			// console.log("YOU ARE HERE")
			createAuth0Client({
				domain: 'dev-r0mu0kil.auth0.com',
				client_id: 'gJXOA5lqmYUuu1UMgADTaFBhbEXc9UQi'
			}).then(auth0 => {
				auth0.loginWithRedirect({
					redirect_uri: 'http://localhost:3000/main'
				}).then(token => {
					//logged in. you can get the user profile like this:
					auth0.getUser(token).then(user => {
						console.log(user);
					});
				});
			});
		}

	return (
		<>
			<nav className="mt-2 rounded navbar navbar-expand-lg navbar-dark bg-secondary">
				<a className="navbar-brand" href="/">DMS</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav mr-auto">

					</ul>
					<form className="form-inline my-2 my-lg-0">
						<button className=" ml-2 btn-success text-light input-group-text" id="" onClick={login}>Login</button>
					</form>
				</div>

			</nav>
		</>
	)
}

export default NavBarLogin;