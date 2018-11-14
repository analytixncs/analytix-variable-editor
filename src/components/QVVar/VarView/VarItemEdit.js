import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px dashed black;
  border-radius: 5px;
  background: #eee;
  margin: 5px;
  padding: 10px;
  width: 93%;
`;
const VarName = styled.div`
  font-weight: bold;
  padding: 5px;
  border-bottom: 1px solid black;

`;

class VarItemEdit extends React.Component {
  render() {
    console.log('VariItemEdit', this.props)
    let { group, name, description, expression, notes, locked } = this.props.qvVar
    return(
      <Wrapper>
        <VarName>Editing - {name}</VarName>
        <div>{description}</div>
        <div>{expression}</div>
        <div>{notes}</div>
        <div>{locked}</div>
        <button onClick={this.props.onCancelEdit}>Cancel</button>
      </Wrapper>
    );
  }
}

export default VarItemEdit;