import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { Modal } from 'antd';

import VarItem from './VarItem';
import VarItemDetail from './VarItemDetail';
import VarItemEdit from './VarItemEdit';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background: #D6E1E7;
  margin: 10px;
`;
const GroupTitle = styled.a`
  background: #47677A;
  font-size: 1.5rem;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
  &:hover {
    color: #D6E1E7;
    background: #07466E;
  }
`;

const VariablesWrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-content: space-between;
`;
// const VariablesWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;
const VarViewGroup = (props) => {
  const [selectedVarId, setSelectedVarId] = useState(undefined);
  const [editing, setEditing] = useState(false);
  
  return (
    <Wrapper>
      <GroupTitle onClick={() => props.onGroupFilter(props.group)}>
        {props.group}
      </GroupTitle>
      <VariablesWrapper>
        {props.qvVariables.map(qvVar => {
          if(selectedVarId === qvVar.id && !editing) {
            return (
              <Modal 
                title="Title"
                visible={true}
                onOk={() => setEditing(false)}
                onCancel={() => setSelectedVarId(undefined)}
              >
                <VarItemDetail 
                  key={qvVar.id}
                  qvVar={qvVar}
                  onStartEdit={() => setEditing(true)}
                  onCancel={() => setSelectedVarId(undefined)}
                />
              </Modal>
            )
          }
          if(selectedVarId === qvVar.id && editing) {
            return (
              <VarItemEdit
                key={qvVar.id}
                qvVar={qvVar}
                onCancelEdit={() => setEditing(false)}
              />
            )
          }
          return(
            <VarItem 
              key={qvVar.id} 
              qvVar={qvVar} 
              link={() => navigate(`\\${qvVar.id}`)}
              onSelectVariable={(varId) => setSelectedVarId(varId)}  
            />
          )
        })
        }
      </VariablesWrapper>
    </Wrapper>
  )
}

export default VarViewGroup;