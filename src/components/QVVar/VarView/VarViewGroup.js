import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

import VarItem from './VarItem';
import VarModal from './VarModal/VarModal';


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
          const visible = selectedVarId === qvVar.id ? true : false
          return(
            <React.Fragment key={qvVar.id}>
              {!visible ? null : 
                <VarModal
                  key={`m-${qvVar.id}`}
                  setEditing={setEditing}
                  setSelectedVarId={setSelectedVarId}
                  visible={visible}
                  selectedVarId={selectedVarId}
                  isEditing={editing}
                  updateQVVariable={props.updateQVVariable}
                  qvVar={qvVar}
                />
              }
                
              <VarItem 
                key={qvVar.id} 
                qvVar={qvVar} 
                onSelectVariable={(varId) => setSelectedVarId(varId)}  
              />
            </React.Fragment>
          )
        })
        }
      </VariablesWrapper>
    </Wrapper>
  )
}

export default VarViewGroup;
