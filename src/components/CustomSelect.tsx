import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

type CustomSelectProps = {
  value: any;
  onChange: (event: React.ChangeEvent<{ value: any }>) => void;
  options: { id: number; name: string }[];
  placeholder?: string;
  width?: number;
};

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder,
  width = 100,
}: CustomSelectProps) => {
  const setName = (value: number) => {
    const option = options.find((option) => option.id === value);
    return option ? option.name : '';
  };

  return (
    <Container style={{ width: width + 'px' }}>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={onChange}
          variant="outlined"
          displayEmpty
          renderValue={(value: any) => {
            if (!value) {
              return (
                <Placeholder>{placeholder ? placeholder : ''}</Placeholder>
              );
            }
            return <div>{setName(value)}</div>;
          }}
        >
          <MenuItem value="">없음</MenuItem>
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

const Container = styled.div``;

const Placeholder = styled.div`
  color: grey;
`;

export default CustomSelect;
