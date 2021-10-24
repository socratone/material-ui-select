import { useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './components/CustomSelect';

const options = [
  { id: 1, name: '하나' },
  { id: 2, name: '둘' },
  { id: 3, name: '셋' },
];

function App() {
  const [value, setValue] = useState<number | ''>('');

  const handleChange = (event: React.ChangeEvent<{ value: number | '' }>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <CustomSelect
        value={value}
        onChange={handleChange}
        options={options}
        placeholder="값을 선택하세요"
        width={300}
      />
    </Container>
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
