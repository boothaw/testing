import styled from "styled-components";
import theme from '../../lib/styles/theme'

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 6px;
  width: fit-content;
  border-bottom: 2px solid black;
  font-family: ${theme.fonts.sans};

`;

export { Menu, MenuItem };
