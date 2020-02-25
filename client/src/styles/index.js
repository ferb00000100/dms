import styled from "styled-components";
import { Card, Form, Jumbotron} from "reactstrap";

const green = "#107910";
const teal = "#008080";
const tealborder = `2px solid ${teal}`;
// const border = `2px solid ${grey}`;

export const CardWrapper = styled.article`
	:hover {
		cursor: pointer;
		.card {
			border-color: ${teal};
			}
	}
	
	text-align: center;
	img {
		width: 80px;
	}
	
	.card-header {
		background-color: ${props => props.isSelected ? teal : null}
		
	}
	
	.card {
	
		background-color: white;
	}
	
	.card-body {
		padding: 2rm;
		}
	
	.card-header {
	
	}
`

export const DetailsWrapper = styled(Card)`

	border: ${tealborder};
	text-align: letf;
	padding: 1rem;
	margin: 1.5rem 0;
	img {
		width: 100px;
		margin: 0 auto;
	
		}
`

export const FormWrapper = styled(Form)`
	
	input.form-control {
		width: 350px
	}
	
	button {
		background: ${teal}
		}
`
export const JumboWrapper = styled (Jumbotron)`

	background-color: ${green}

`

