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
const H1 = styled.h1`
  margin: 0;
`;

export default (props) => {
  return (
    <Header>
      <H1><Link to={props.linkTo}>{props.title}</Link></H1>
      <Link to="/settings">Settings</Link>
    </Header>
  )
}