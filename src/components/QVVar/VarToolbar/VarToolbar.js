import React from 'react';
import { Link, Redirect } from '@reach/router';
import styled from 'styled-components';

/*
* The Toolbar component sits inside the Toolbar Grid cell
* To make the flex centering work, I added a height to the Nav styled div
* making it 1 less pixel than the grid cell height.
*/
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 39px; {/*1 minus grid height*/}
  position: relative;
`;

const AppTitle = styled.div`
  font-size: 1.5rem;
  padding: 0 10px;
`;

const MyNavLink = props => {
  const appendClass = props => ({ isCurrent }) => {
    let finalClass = props.className ? props.className + ' ' : '' ;
    finalClass += isCurrent ? "active-link" : ""
    return {
      className: finalClass
    }
  }
  return <Link getProps={appendClass(props)} {...props} />
}

const NavLink = styled(MyNavLink)`
  border: 1px solid #9e9e9e;
  background: white;
  padding: 5px 10px;
  margin: 0 10px;
  &:hover {
    color: white;
    background: #07466E;
  }
  &.active-link {
    background: #47677A;
    color: white;
  }
`;

class VarToolbar extends React.Component {
  render() {
    return (
      <Nav>
        <AppTitle>{this.props.appId} Variables</AppTitle>
        <NavLink to="./">Variable</NavLink>
        <NavLink to="varadd">Add Variable</NavLink>
        <NavLink to="varexport">Export</NavLink>
      </Nav>
    )
  }
}

export default VarToolbar;