import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startLoadQvVariables, getFilteredVars, getDistinctGroups } from '../../../store/qvVars';
import { updateSelectedGroup, updateTextFilter, updateLockedFilter } from '../../../store/appState';
// import VarItem from './VarItem';
// import VarItemDetail from './VarItemDetail';
// import VarItemEdit from './VarItemEdit';
import VarViewGroup from './VarViewGroup';
import FilterBar from './FilterBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

class VarView extends React.Component {
  state = {
    groupFilter: '',
    editing: false
  }
  componentDidMount() {
    if (this.props.appId) {
      this.props.startLoadQvVariables(this.props.appId);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.appId !== this.props.appId) {
      this.props.startLoadQvVariables(this.props.appId);
    }
  }
  onGroupFilter = (group) => this.props.updateSelectedGroup(group);
  onTextFilter = (text) => this.props.updateTextFilter(text);
  onLockedFilter = (checked) => this.props.updateLockedFilter(checked);

  render() {
    return (
      <div>
        <FilterBar
          groups={this.props.groups}
          groupFilter={this.props.appState.groupFilter}
          textFilter={this.props.appState.textFilter}
          onGroupFilter={this.onGroupFilter}
          onTextFilter={this.onTextFilter}
          onLockedFilter={this.onLockedFilter}
        />
        <Wrapper>
          {Object.keys(this.props.qvVariables).map(groupName => {
            return (
                <VarViewGroup 
                  key={groupName}
                  group={groupName} 
                  qvVariables={this.props.qvVariables[groupName]}
                  onGroupFilter={this.onGroupFilter}
                />
            )
          })}
        </Wrapper>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    qvVariables: getFilteredVars(state.qvVariables, state.appState.textFilter, state.appState.groupFilter, state.appState.hideLocked),
    groups: getDistinctGroups(state.qvVariables),
    appState: state.appState
  }
}

export default connect(mapStateToProps, { 
  startLoadQvVariables, 
  updateSelectedGroup,
  updateTextFilter,
  updateLockedFilter })(VarView);

// if(this.state.selectedVarId === qvVar.id && !this.state.editing) {
//               return (
//                 <VarItemDetail 
//                   key={qvVar.id}
//                   qvVar={qvVar}
//                   onStartEdit={() => this.onUpdateEditState(true)}
//                 />
//               )
//             }
//             if(this.state.selectedVarId === qvVar.id && this.state.editing) {
//               return (
//                 <VarItemEdit
//                   key={qvVar.id}
//                   qvVar={qvVar}
//                   onCancelEdit={() => this.onUpdateEditState(false)}
//                 />
//               )
//             }
//             return(
//               <VarItem 
//                 key={qvVar.id} 
//                 qvVar={qvVar} 
//                 link={() => this.props.navigate(`\\${qvVar.id}`)}
//                 onSelectVariable={this.onSelectVariable}  
//               />
//             )
//           })