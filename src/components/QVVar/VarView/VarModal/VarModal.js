import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Modal, Input } from 'antd';

import Field from '../Field';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Label = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;
const VarModal = (props) => {
  let { group, name, description, expression, notes, locked } = props.qvVar
  let { setEditing, setSelectedVarId, updateQVVariable, isEditing, selectedVarId, visible } = props;
  const onUpdateQVVariable = () => {
    let updatedQVVar = {

    }
    updateQVVariable(updatedQVVar)
    setEditing(false)
    setSelectedVarId(undefined)
  }
  return(
    <Modal
      title={name}
      visible={visible}
      bodyStyle={{padding: "0"}}
      width="50%"
      onOk={onUpdateQVVariable}
      okText='Save'
      okButtonDisabled={true}
      onCancel={() => setSelectedVarId(undefined)}
    >
      <Wrapper>
        <InputWrapper>
          <Label>Variable Name</Label>
          <Input 
            disabled={!isEditing}
            value={name}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Description</Label>
          <Input
            disabled={!isEditing}
            value={description}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Expression</Label>
          <Input.TextArea
            disabled={!isEditing}
            value={expression}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Notes</Label>
          <Input
            disabled={!isEditing}
            value={notes}
          />
        </InputWrapper>
        <div>{locked}</div>
      </Wrapper>
    </Modal>
  );
}

export default VarModal;