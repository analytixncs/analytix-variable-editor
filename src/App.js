import React from 'react';
import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
//--Ant Design css load
import '../node_modules/antd/dist/antd.min.css';
// import 'semantic-ui-css/semantic.min.css';

import {Router, navigate, createMemorySource, createHistory, LocationProvider } from '@reach/router';
import {Provider} from 'react-redux';

import Main from './components/Main';
import Header from './components/Header';
import Settings from './components/settings/Settings';
import QvVariables from './components/QVVar/QvVariables';
import VarAdd from './components/QVVar/VarAdd/VarAdd';
import VarView from './components/QVVar/VarView/VarView';
import VarExport from './components/QVVar/VarExport/VarExport'

// #07466E - Dark Blue (Header)
// #64C2E3 - Light Blue
// #D6E1E7 - gray blue
// #C1D900 - Green
// #F6F6F6 - Light Gray
// import { startLoadApplicationList } from './actions'; --This creates the store
// that will be passed to the Provider component let store =
let store = require('./store/configureStore').configure();
console.log(store)

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

const Error = (props) => {console.log(props); return (<div>Route not implemented -- {props.uri}</div>)};

class App extends React.Component {
  componentDidMount() {
    navigate("/qvvar/salesflash")
  }
  render() {
    let source = createMemorySource("/");
    let history = createHistory(source);

    console.log('App props', this.props)
    return (
      <React.Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <LocationProvider history={history}>
            {true && <Header title="Analytix Utilities" linkTo="/" />}
            <Router>
              <Main path="/" />
              <QvVariables path="/qvvar">
                <VarView path=":appId/" />
                <VarAdd path=":appId/varadd" />
                <VarExport path=":appId/varexport" />
              </QvVariables>
              <Settings path="/settings" />
              <Error default />
            </Router>
          </LocationProvider>
        </Provider>
      </React.Fragment>
    )
  }
}

export default App;


