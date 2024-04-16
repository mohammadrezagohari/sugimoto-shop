import styled from 'styled-components';
export default styled.button`
  background-color: ${(props: any) =>
    props.theme.theme === 'dark' ? 'white' : 'black'};

  color: ${(props: any) => (props.theme.theme === 'dark' ? 'black' : 'white')};
`;