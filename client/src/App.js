import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Col } from "reactstrap";
import UserDetails from "./components/UserDetails";
import MainPage from "./pages/Main";
import Uploads from "./pages/Uploads";
import Downloads from "./pages/Downloads";
import API from "./utils/API";
import NavBar from "./components/NavBar";


const App = () => {
	const [userInfo, setUserInfo] = useState({
		userData: []
	});

	const { userData } = userInfo

	useEffect(() => {
		// console.log("LOOK HERE--->")
		//TODO This username needs to be an input field and quried from the DB
		getUsers("jmartin")
	}, []);


	const getUsers = user => {
		// console.log("User is",user)
		if (!user)
		{
			return alert("No User Name Selected !");
		}

		API.getUsers(user)
			.then(res => {
				if (!res) return;
				// console.log(res.data);
				setUserInfo({
					userData: res.data
				});
			})
			.catch(err => console.log("Database Read Error", err))
	}

	return (
		<Router>
			<Container>
				<Switch>
					<Route exact path={'/'}>
						<Col md={12}>
							<MainPage/>
						</Col>
					</Route>
					<Route exact path={'/users'}>
						{/*TODO ReFormat user information*/}
						{/*	TODO Create Download Links for each Document*/}
						<Col md={12}>
							<NavBar/>
							{userData.length ? (
								<>
									{userData.map(user => (
							<UserDetails
									firstName={user.firstName}
									lastName={user.lastName}
									userName={user.userName}
									documents={user.documents ? "No Documents Found" : user.documents}
								/>
							))}
								</>
								) : (
								<div className="d-flex loading-spinner">
									<div className="spinner-border" role="status">
										<span className="sr-only">Loading...</span>
									</div>
								</div>
							)}
						</Col>
					</Route>
					<Route exact path={'/uploads'}>
						<Col md={12}>
							<Uploads />
						</Col>
					</Route>
					<Route exat path={'/downloads'}>
						<Downloads />
					</Route>

				</Switch>
			</Container>
</Router>
	)

}

export default App;
