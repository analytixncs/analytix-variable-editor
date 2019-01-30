import React from 'react';
import { Link, Router } from '@reach/router';
import styled from 'styled-components';
import { Icon, Select } from 'antd';

import VarTest from './VarTest';
/*
* The Toolbar component sits inside the Toolbar Grid cell
* To make the flex centering work, I added a height to the Nav styled div
* making it 1 less pixel than the grid cell height.
*/
const Nav = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 39px; {/*1 minus grid height*/}
  position: relative;
`;

const AppTitle = styled.div `
  font-size: 1.5rem;
  padding: 0 10px;
`;

const MyIcon = styled(Icon)`
  border-radius: 18px;
  width: 18px;
  /* border: 1px solid black; */
  background: #ffffff85;
  color: black;
  height: 18px;
  padding-top: 2px;
`;

const MyNavLink = props => {
  const appendClass = props => ({isCurrent}) => {
    let finalClass = props.className
      ? props.className + ' '
      : '';
    finalClass += isCurrent
      ? "active-link"
      : ""
    return {className: finalClass}
  }
  return <Link getProps={appendClass(props)} {...props}/>
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
    console.log('varToolBar: ', this.props)
    const activePath = this.props.location.pathname;
    const activeLink = activePath.includes('add')
      ? 'add'
      : (activePath.includes('export')
        ? 'export'
        : 'root');
    console.log('varToolBar-link: ', activeLink)
    return (
      <Nav>
        <AppTitle>{this.props.appId}
          Variables</AppTitle>
        <Select allowClear style={{ width: 120 }}>
          <Select.Option value="one">One</Select.Option>
          <Select.Option value="two">Two</Select.Option>
          <Select.Option value="three">Three</Select.Option>
        </Select>
        <Router>
            <VarTest path=":appId/*"/>
        </Router>
        <NavLink to="./">Variable
          <Icon type={activeLink === 'root'
            ? "down"
            : "right"}/></NavLink>
        <NavLink to="varadd">Add Variable
          <Icon type={activeLink === 'add'
            ? "down"
            : "right"}/></NavLink>
        <NavLink to="varexport">Export
          <Icon
            type={activeLink === 'export'
            ? "down"
            : "right"}/></NavLink>
      </Nav>
    )
  }
}

export default VarToolbar;