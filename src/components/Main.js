import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;
const AppButtonContainer = styled.ul`  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppButton = styled.li`
  margin: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid darkgray;
  list-style-type: none;
  text-align: center;
  height: 75px;
`;
const AppLink = styled(Link)`
  display: block;
  font-size: 1.4rem;
  color: #555;
  font-weight: bold;
  height: 100%;
  padding: 18px;
  background: #b5ccf3;
  &:hover {
    background: #6496eb;
    color: white;
  }
`;
class Main extends React.Component {

  render() {
    console.log('Main Proprs', this.props)
    return (
      <Grid>
        <AppButtonContainer>
          <AppButton><AppLink to="/qvvar">Variable Editor</AppLink></AppButton>
          <AppButton><AppLink to="/qvgroup">Group Editor</AppLink></AppButton>
          <AppButton><AppLink to="/settings">Settings</AppLink></AppButton>
        </AppButtonContainer>
        
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.appState.user || 'Mark'
  };
};

export default connect(mapStateToProps)(Main);