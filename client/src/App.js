import React, { useState, useEffect, Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import UserDetails from "./components/UserDetails";
import MainPage from "./pages/Main"
import Uploads from "./pages/Uploads"
import API from "./utils/API";


const App = () => {
	//TODO Static statue until DB is working

	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		awsApiKey: "",
		awsApiSecret: "",
		documents: []
	});

	const { firstName, lastName, userName, awsApiKey, awsApiSecret, documents } = userInfo

	useEffect(() => {
		console.log("LOOK HERE--->")
		//TODO This username needs to be an input field and quried from the DB
		getUsers("jmartin")
	}, []);


	const getUsers = user => {
		console.log("User is",user)
		if (!user)
		{
			return alert("No User Name Selected !");
		}

		API.getUsers(user)
			.then(res => {
				//TODO How do I do this without the index???
				console.log(res.data[0].documents);
				setUserInfo({
					firstName: res.data[0].firstName,
					lastName: res.data[0].lastName,
					userName: res.data[0].userName,
					awsApiKey: res.data[0].awsApiKey,
					awsApiSecret: res.data[0].awsApiSecret,
					documents: res.data[0].documents,
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
						<Col md={12}>
								<UserDetails
									firstName={firstName}
									lastName={lastName}
									userName={userName}
									documents={documents ? "No Documents Found" : documents}
								/>
								{/*))}*/}
						</Col>
					</Route>
					<Route exact path={'/uploads'}>
						<Col md={12}>
							<Uploads />
								{/*TODO S3 data populates here*/}

						</Col>
					</Route>

				</Switch>
			</Container>
</Router>
	)

}

export default App;
