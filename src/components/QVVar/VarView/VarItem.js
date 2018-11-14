import React from 'react';
import styled from 'styled-components';

const VariableView = styled.a`s
  margin: 5px;
  word-wrap: break-word;
  word-break: break-word;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  border-radius: .28571429rem;
  border: 1px solid rgba(34,36,38,.15);
  padding: 15px;
  background: #F6F6F6;
  &:hover {
    background: #f0f0f0;
  }
`;


class VarItem extends React.Component {

  
  render() {
    return (
      <VariableView onClick={() => this.props.onSelectVariable(this.props.qvVar.id)}>
        {this.props.qvVar.name}
      </VariableView>
    )
  }
}

export default VarItem;