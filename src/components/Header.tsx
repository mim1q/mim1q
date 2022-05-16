import styled from 'styled-components';

const StyledHeaderText = styled.h1`
  font-size: 3rem;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(#ff6666, #6666ff);
  color: transparent;
`;

const Header = () => {
  return (
    <header>
      <StyledHeaderText>Mim1q</StyledHeaderText>
    </header>
  );
};

export default Header;
