import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { getApplicationNames } from '../../../fileAccessAPI/nativeFileAccess';


const RouterPath = styled.div`
  background: lightblue;
  color: black;
  margin-top: 10%;
  border: 1px dashed salmon;
`;

const Wrapper = styled.div`
  background: white;
`;

const Nav = styled.ul`
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  border-bottom: 1px solid gray;
  padding: 0;
  margin: 0;
  width: 100%;
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
  padding: 5px;
  display: block;
  
  &:hover {
    background: lightgray;
  }
  &.active-link {
    background: darkgray;
    color: white;
  }
`;

class VarSidebar extends React.Component {
  state = {
    applicationNames: []
  }
  componentDidMount() {
    getApplicationNames().then(result => this.setState({ applicationNames: result }))
  }
  
  render() {
    return (      
      <Wrapper>
        <Nav>
         {
           this.state.applicationNames.map(applicationName => (
             <NavItem key={applicationName}>
              <NavLink 
                to={applicationName.toLowerCase()}
              >{applicationName}</NavLink>
            </NavItem>
           ))
         }
        </Nav>
        <RouterPath>{this.props.routerPath}</RouterPath>
      </Wrapper>
    )
  }
}

export default VarSidebar;