import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid black;
  background: #dedede;
  margin: 0;
`;
const MyLink = styled(Link)`
  color: #697049;
  :visited, :hover, :focus, :active
   {
    color: #96a169;
    text-decoration: none;
  }
`;

const H1 = styled.h1`
  margin: 0;
`;

export default (props) => {
  return (
    <Header>
      <H1><MyLink to={props.linkTo}>{props.title}</MyLink></H1>
      <Link to="/settings">Settings</Link>
    </Header>
  )
}