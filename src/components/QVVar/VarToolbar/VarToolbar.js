import React from 'react';
import { Link, Router, navigate } from '@reach/router';
import styled from 'styled-components';
import { Icon, Select } from 'antd';

import VarTest from './VarTest';
import { getApplicationNames } from '../../../fileAccessAPI/nativeFileAccess';
/*
* The Toolbar component sits inside the Toolbar Grid cell
* To make the flex centering work, I added a height to the Nav styled div
* making it 1 less pixel than the grid cell height.
*/
const Nav = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 10px;
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
  state = {
    applicationNames: []
  }
  componentDidMount() {
    getApplicationNames().then(result => this.setState({ applicationNames: result }))
  }
  handleAppChange = (value) => {
    
    console.log('Appid change value', `${value}`)
    if (value) {
      // Since using the props navigate we can use relative paths
      this.props.navigate(`${value}`)
    } else {
      this.props.navigate('/qvvar')
    }
  }
  render() {
     console.log('varToolBar: ', this.props)
    return (
      <Nav>

        <Select allowClear style={{ width: 200, marginRight: 20 }} onChange={this.handleAppChange}>
          {
            this.state.applicationNames.map(appName => (
              <Select.Option key={appName} value={appName.toLowerCase()}>{appName}</Select.Option>
            ))
          }
        </Select>
        <Router>
          <VarTest path=":appId/*"/>
        </Router>
      </Nav>
    )
  }
}

export default VarToolbar;