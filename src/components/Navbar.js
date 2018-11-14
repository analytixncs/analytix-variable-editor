import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;


const Navbar = (props) => {
		return (
			<Row>

				<div style={{border: "1px solid hsla(0,0%,4%,.25)", width: "100%"}}>          
						<span style={{fontSize:"1.3em", fontWeight: "bold"}}>Analytix Variable Editor</span>
						<span style={{fontSize:"1.3em", fontWeight: "bold", color: "red"}}> --> {props.user}</span>
						<ul className="menu">
						  <li><Link to="/" activeClassName="active">Home</Link></li>
							<li><Link to="/addqvvar" activeClassName="active">Add New Variable</Link></li>
							<li><Link to="/qvvar" activeClassName="active">QVVar Main</Link></li>
							<li><Link to="/qvvar/salesflash" activeClassName="active">QVVar SalesFlash</Link></li>
							<li><Link to="/settings" activeClassName="active">Settings</Link></li>
						</ul>
				</div>

			</Row>
		);
	};


export default Navbar;