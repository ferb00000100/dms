import React, {useEffect} from 'react';
import{ Col } from "reactstrap";
import { Anchor } from "../../styles";
import s3Image from "./S3_icon.png";

const Downloads = props => {


	return (
		<>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
			<ul>
				<Anchor>
				<li className="p-2">{props.Name}
				</li>
					<a><img src={s3Image} /></a>
					{/*<a href="https://docusys.s3.amazonaws.com/"{...props.Name}><img src={s3Image} /></a>*/}
				</Anchor>
			</ul>
			</Col>
		</>
	)
}

export default Downloads;