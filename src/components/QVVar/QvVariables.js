import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router'

import VarSidebar from './VarSidebar/VarSidebar';
import VarToolbar from './VarToolbar/VarToolbar';

const Grid = styled.div`
  display: grid;
  width: 100%;
  ${'' /* Subtract the main header size from the height. */}
  height: calc(100vh - 50px); 
  grid-template-columns: 200px auto;
  grid-template-rows: 40px auto;
  grid-template-areas: "toolbar toolbar"
                       "aside content";
`;

const Toolbar = styled.div`
  grid-area: toolbar;
  background: #d6ebf8;
  border-bottom: 1px solid #9e9e9e;
  ${'' /* grid-column: 1/3;
  grid-row: 1/2; */}
  ${'' /* position: fixed;
  width: 100%;
  top: 50;
  z-index: 2; */}
`;

const Aside = styled.div`
  grid-area: aside;
  ${'' /* grid-column: 1/2;
  grid-row: 2/3; */}
  border-right: 1px solid gray;
  background: #d6ebf8;
`;
const VarArea = styled.div`
  grid-area: content;
  overflow: auto;
  ${'' /* grid-column: 2/3;
  grid-row: 2/3; */}
`;

class QvVariables extends React.Component {
  render() {
    console.log('QvVariables Props', this.props)
    return (
      <Grid>
        <Toolbar>
          <Router>
            <VarToolbar path=":appId/*"/>
          </Router>
        </Toolbar>
        <Aside>
          <VarSidebar routerPath={this.props.location.pathname}/>
        </Aside>
        <VarArea>
          {this.props.children}
        </VarArea>
      </Grid>
    )
  }
}

export default QvVariables;