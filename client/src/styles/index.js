import styled from "styled-components";
import { CardHeader, Card, Form, Jumbotron} from "reactstrap";

const green = "#107910";
const teal = "#008080";
const tealborder = `2px solid ${teal}`;
// const border = `2px solid ${grey}`;

export const Anchor = styled.a`
	display: inline-block;
	img {
		display: block
		width: 40px;
		height: 40px;
	}
`

export const Headers = styled.section`
	 h1 {
	 color: ${teal};
	 // font-family: sans-serif;
	 // font:Gill Sans;
        font-size: 45px;
        font-weight: 500;
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
