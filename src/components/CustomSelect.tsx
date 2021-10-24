import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

type CustomSelectProps = {
  value: any;
  onChange: (event: React.ChangeEvent<{ value: any }>) => void;
  children: React.ReactElement[];
  name?: string;
  placeholder?: string;
  width?: number;
};

const CustomSelect = ({
  value,
  onChange,
  children,
  name,
  placeholder,
  width = 100,
}: CustomSelectProps) => {
  const classes = useStyles();

  const setName = (value: number) => {
    const element = children.find(
      (element) => Number(element.props.value) === value
    );
    return element ? element.props.children : '';
  };

  return (
    <Container style={{ width: width + 'px' }}>
      <FormControl fullWidth>
        <StyledSelect
          value={value}
          onChange={onChange}
          name={name}
          variant="outlined"
          displayEmpty
          renderValue={(value: any) => {
            if (!value) {
              return (
                <PlaceholderText>
                  {placeholder ? placeholder : ''}
                </PlaceholderText>
              );
            }
            return <SelectedText>{setName(value)}</SelectedText>;
          }}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            classes: {
              paper: classes.menuPaper,
            },
          }}
        >
          {children}
        </StyledSelect>
      </FormControl>
    </Container>
  );
};

const Container = styled.div``;

const PlaceholderText = styled.div`
  color: grey;
`;

const SelectedText = styled.div``;

const StyledSelect = styled(Select)`
  background: #fcfcfc;
  overflow: hidden;

  & .MuiSvgIcon-root {
    /* right: 25px; */
    fill: #c1c1c1;
  }

  .MuiSelect-select:focus {
    background-color: #fcfcfc;
  }

  // border
  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: #e2e2e2;
  }

  // focus border
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #e2e2e2;
    border-width: 1px;
  }

  // hover border
  &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #e2e2e2;
  }

  &.MuiInputBase-root {
    border-radius: 10px;
  }

  & .MuiSelect-root {
    height: 46px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
  }
`;

const useStyles = makeStyles({
  menuPaper: {
    background: '#fff',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
});

export default CustomSelect;
