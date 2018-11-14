import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Field from './Field';

const Wrapper = styled.div`
  border: 1px dashed black;
  border-radius: 5px;
  background: #eee;
  width: 93%;
  margin: 10px;
`;
const VarName = styled.div`
  font-weight: bold;
  padding: 5px;
  border-bottom: 1px solid black;
`;

class VarItemDetail extends React.Component {
  render() {
    console.log('VariItemEdit', this.props)
    let { group, name, description, expression, notes, locked } = this.props.qvVar
    return(
      <Wrapper>
        <VarName>{name}</VarName>
        <Field
          label="Description"
          fieldValue={description}
        />
        <Field
          label="Expression"
          fieldValue={expression}
        />
        <Field
          label="Notes"
          fieldValue={notes}
        />
        <div>{locked}</div>
        <button onClick={this.props.onStartEdit}>Edit</button>
        <button onClick={this.props.onCancel}>Cancel</button>
      </Wrapper>
    );
  }
}

export default VarItemDetail;