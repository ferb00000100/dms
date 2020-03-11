import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Col } from "reactstrap";
import UserDetails from "./components/UserDetails";
import MainPage from "./pages/Main";
// import Upload from "./pages/Uploads";  // replaced with Push
import Downloads from "./pages/Downloads";
import Push from "./pages/Push";
import Signup from "./pages/Signup"
import LoginPage from "./pages/LoginPage";
import API from "./utils/API";
import NavBar from "./components/NavBar";
import { Headers } from "../src/styles/"


const App = () => {
	const [userInfo, setUserInfo] = useState({
		userData: []
	});

	const { userData } = userInfo

	useEffect(() => {
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
						<LoginPage />
					</Route>
					<Route exact path={'/main'}>
						<Col md={12}>
							<MainPage/>
						</Col>
					</Route>
					<Route exact path={'/users'}>
						{/*TODO ReFormat user information*/}
						{/*	TODO Create Download Links for each Document*/}
						<Col md={12}>
							<Headers>
							<h1>DMS Users</h1>
							</Headers>
							<Col sm="12" md={{ size: 10, offset: 2 }}>
								<NavBar/>
								{userData.length ? (
									<>
										{userData.map(user => (

											<UserDetails
												firstName={user.firstName}
												lastName={user.lastName}
												userName={user.userName}
												documents={!user.documents ? "No Documents Found" : user.documents}
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
							</Col></Col>
					</Route>
					<Route exact path={'/uploads'}>
						<Col md={12}>
							{/*<Upload />*/}
						<Push/>
						</Col>
					</Route>
					<Route exact path={'/downloads'}>
						<Downloads />
					</Route>
					<Route exact path={'/addUser'}>
						<Signup />
					</Route>
				</Switch>
			</Container>
		</Router>
	)

}

export default App;