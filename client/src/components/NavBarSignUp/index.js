import React  from 'react';

const NavBar = () => {

	return (
		<>
			<nav className="mt-2 rounded navbar navbar-expand-lg navbar-dark bg-secondary">
				<a className="navbar-brand" href="/">DMS</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<a href="/" className="ml-2 btn btn-success my-2 my-sm-0" type="submit">Login</a>
						<a href="/addUser" className="ml-2 btn btn-success my-2 my-sm-0" type="submit">Add User</a>
					</form>
				</div>
			</nav>
		</>
	)
}

export default NavBar;