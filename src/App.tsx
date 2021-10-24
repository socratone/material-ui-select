import { MenuItem } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './components/CustomSelect';
import { ThemeProvider } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

// 'findDOMNode is deprecated in StrictMode' warning 제거를 위한 theme
const theme = unstable_createMuiStrictModeTheme();

function App() {
  const [value, setValue] = useState<number | ''>('');

  const handleChange = (event: React.ChangeEvent<{ value: number | '' }>) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CustomSelect
          value={value}
          onChange={handleChange}
          placeholder="값을 선택하세요"
          width={300}
          name="number"
        >
          <MenuItem value="" disableRipple>
            없음
          </MenuItem>
          <MenuItem value={1} disableRipple>
            하나
          </MenuItem>
          <MenuItem value={2} disableRipple>
            둘
          </MenuItem>
          <MenuItem value={3} disableRipple disabled>
            셋
          </MenuItem>
        </CustomSelect>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  padding: 20px;
  height: 100vh;

  & > * {
    margin-bottom: 10px;
  }
`;

export default App;
