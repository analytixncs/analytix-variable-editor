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
                       "content content";
`;

const Toolbar = styled.div`
  grid-area: toolbar;
  background: #d6ebf8;
  border-bottom: 1px solid #9e9e9e;
`;

const Aside = styled.div`
  grid-area: aside;
  border-right: 1px solid gray;
  background: #d6ebf8;
`;
const VarArea = styled.div`
  grid-area: content;
  overflow: auto;
`;

class QvVariables extends React.Component {
  render() {
    //console.log('QvVariables Props', this.props)
    return (
      <Grid>
        <Toolbar>
          <Router>
            <VarToolbar path="*"/>
          </Router>
        </Toolbar>
        {/* <Aside>
          <VarSidebar routerPath={this.props.location.pathname}/>
        </Aside> */}
        <VarArea>
          {this.props.children}
        </VarArea>
      </Grid>
    )
  }
}

export default QvVariables;