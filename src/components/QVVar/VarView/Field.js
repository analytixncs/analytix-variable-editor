import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 15px;
  width: 100%;
`;

const FieldLabel = styled.div`
  font-weight: bold;
`;
const FieldValue = styled.input`
  padding: 5px;
  border: 1px solid gray;
  width: 100%;
`;

const Field = ({label, fieldValue}) => {
  return (
  <Wrapper>
    <FieldLabel>
      {label}
    </FieldLabel>
    <FieldValue value={fieldValue} disabled/>
  </Wrapper>
  );
}

Field.propTypes = {
  label: PropTypes.string,
  fieldValue: PropTypes.string
}

export default Field;