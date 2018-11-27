import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Select, Modal, Input, Button, Icon, Checkbox } from 'antd';

import { AppStateContext } from '../VarView';

import { currentUnixMoment } from '../../../../helpers/helpers';
//import Field from '../Field';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  position: relative;
`;
const Label = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const SelectWrapper = styled(Select)`
  width: 200px;
`;

const CheckboxWrapper = styled.div`
  background: ${props => props.locked ? 'coral' : 'white'};
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid lightgray;
  margin: 5px;
`;    
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const EditButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  height: 75px;
`;

const VarModal = (props) => {
  let { setEditing, setSelectedVarId, updateQVVariable, isEditing, selectedVarId, visible } = props;
  // Create local state variables
  let [group, setGroup] = useState(props.qvVar.group);
  let [name, setName] = useState(props.qvVar.name);
  let [description, setDescription] = useState(props.qvVar.description);
  let [expression, setExpression] = useState(props.qvVar.expression);
  let [notes, setNotes] = useState(props.qvVar.notes);
  let [locked, setLocked] = useState(props.qvVar.locked);
  // Get context information
  const { groups } = useContext(AppStateContext);

  const onUpdateQVVariable = () => {
    let updatedQVVar = {
      ...props.qvVar,
      group,
      name,
      expression,
      notes,
      description,
      locked,
      modifyDate: currentUnixMoment()
    }
    console.log("updated QVVAr", updatedQVVar)
    updateQVVariable(updatedQVVar)
    setEditing(false)
    setSelectedVarId(undefined)
  }
  const onClose = () => {
    setEditing(false);
    setSelectedVarId(undefined);
  }
  return(
    <Modal
      title={`${isEditing ? 'Editing' : 'Viewing'} - ${name}`}
      visible={visible}
      destroyOnClose
      bodyStyle={{padding: "0"}}
      width="50%"
      onCancel={() => setSelectedVarId(undefined)}
      footer={[
        <ButtonWrapper key='buttons'>
          <Button key="cancel" onClick={onClose}>Close</Button>
          <Button key="save" disabled={!isEditing} type="primary" onClick={onUpdateQVVariable}>Save</Button>
        </ButtonWrapper>
      ]}
    >
      <Wrapper>
        <InputWrapper>
          <Label>Group</Label>
          <SelectWrapper
            disabled={!isEditing}
            placeholder="Group Filter"
            onChange={setGroup}
            value={group}
          >
            {groups.map(groupName => <Select.Option key={groupName}>{groupName}</Select.Option>)}
          </SelectWrapper>
          <EditButton
            icon={isEditing ? "rollback" : "edit"}
            onClick={() => setEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </EditButton>
        </InputWrapper>

        <InputWrapper>
          <Label>Variable Name</Label>
          <Input 
            disabled={!isEditing}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Description</Label>
          <Input.TextArea
            disabled={!isEditing}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Expression</Label>
          <Input.TextArea
            disabled={!isEditing}
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Notes</Label>
          <Input
            disabled={!isEditing}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Locked Variable</Label>
          <CheckboxWrapper locked={locked}>
            <Checkbox 
              checked={locked}
              onChange={(e) => setLocked(e.target.checked)}
              disabled={!isEditing}
            >
              <Icon 
                type={locked ? 'lock' : 'unlock'}
  
              />
            </Checkbox>
          </CheckboxWrapper>
        </InputWrapper>
      </Wrapper>
    </Modal>
  );
}

export default VarModal;