import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router'

import VarSidebar from './VarSidebar/VarSidebar';
import VarToolbar from './VarToolbar/VarToolbar';
import { getApplicationNames } from '../../nativeAPI'

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 95vh;
  grid-template-columns: 200px auto;
  grid-template-rows: 40px auto;
`;

const Toolbar = styled.div`
  background: #d6ebf8;
  border-bottom: 1px solid #9e9e9e;
  grid-column: 1/3;
  grid-row: 1/2;
`;

const Aside = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  border-right: 1px solid gray;
  background: #d6ebf8;
`;
const VarArea = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
`;

class VarMain extends React.Component {
  componentDidMount() {
    console.log(getApplicationNames())
  }
  render() {
    console.log('VarMain Props', this.props)
    return (
      <Grid>
        <Toolbar>
          <Router>
            <VarToolbar path=":appId/*"/>
          </Router>
        </Toolbar>
        <Aside>
          <VarSidebar />
        </Aside>
        <VarArea>
          {this.props.children}
        </VarArea>
      </Grid>
    )
  }
}

export default VarMain;