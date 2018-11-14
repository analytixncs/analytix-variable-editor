import React from 'react';
import styled from 'styled-components';
// import DatePicker from 'antd/lib/date-picker';  // for js
// import 'antd/lib/date-picker/style/css';        // for css
import { Select, Input, Icon, Checkbox } from 'antd';
const Option = Select.Option;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: lightgray;
  padding: 10px;
  border-bottom: 1px solid black;
${'' /*   
  position: sticky;
  top: 40px; */}
`;
const SelectWrapper = styled(Select)`
  width: 200px;
`;
const InputWrapper = styled.div`
  width: 150px;
  position: relative
`;
const IconWrap = styled(Icon)`
  position: absolute;
  right: 5px;
  top: 9px;
  border-radius: 10px;
  &:hover {
    background: #eccfcf;
    cursor: pointer;
  }
`;

const FilterBar = (props) => {
  
  const options = props.groups.map(groupName => <Option key={groupName}>{groupName}</Option>)
  const _onGroupFilter = (value) => props.onGroupFilter(value);
  const _onTextFilter = (value) => props.onTextFilter(value.target.value);
  const _onLockedFilter = (value) => props.onLockedFilter(value.target.checked);
  return (
    <Wrapper>
      <SelectWrapper
        allowClear
        placeholder="Group Filter"
        onChange={_onGroupFilter}
        value={props.groupFilter}
      >
        {options}
      </SelectWrapper>
      <InputWrapper>
        <Input 
          placeholder="Search Variables"
          value={props.textFilter}
          onChange={_onTextFilter}
        />
        <IconWrap onClick={() => props.onTextFilter('')} type="close-circle" theme="outlined" />
      </InputWrapper>
      <Checkbox
        onChange={_onLockedFilter}
      >
        Hide Locked
      </Checkbox>
    </Wrapper>
  );
};

export default FilterBar;