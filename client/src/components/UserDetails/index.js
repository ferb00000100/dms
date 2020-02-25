import React from 'react';
import { DetailsWrapper } from "../../styles/";
import NavBar from "../NavBar";

const UserDetails = props => {

	return (
		<>
			<NavBar />
			<DetailsWrapper>
				<h3>{props.firstName} {props.lastName}</h3>
				<p><strong>Username:</strong> {props.userName}</p>
				<p><strong>Documents:</strong> {props.documents}</p>
			</DetailsWrapper>
		</>
	)
}

export default UserDetails;