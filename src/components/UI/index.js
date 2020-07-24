import styled from "styled-components";

import theme from "../../lib/styles/theme";

/**
 * @name UI component
 * @description General styled components used throughout the app
 */

const Layout = styled.div`
  position: relative;
  width: calc(100% - 120px);

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 0px 32px;
  padding-right: 0px;

  @media (max-width: 720px) {
    padding: 0px 16px;
    padding-right: 16px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0px;

  @media (max-width: 720px) {
    display: none;
  }
`;

const Navbar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 32px;

  @media (max-width: 720px) {
    padding: 16px;
    padding-top: 32px;
  }
`;

const StabNavLogo = styled.img`
  height: 32px;

  @media (max-width: 720px) {
    height: 22px;
  }
`;

const SidebarText = styled.div`
  opacity: 0.3;
  font-size: 12px;
  text-transform: uppercase;
  transform: rotate(90deg);
  transform-origin: top;
  margin-top: 100px;
  letter-spacing: 2px;
  width: 200px;
  font-family: ${theme.fonts.sans};
`;

const SidebarIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SidebarIcon = styled.img`
  height: 22px;
  margin-bottom: 6px;
  opacity: 0.2;
  transition: 0.2s ease;

  & {
    opacity: 1;
    cursor: pointer;
  }
`;

export {
  Layout,
  Sidebar,
  Navbar,
  StabNavLogo,
  SidebarIcon,
  SidebarIconWrap,
  SidebarText,
  ContentContainer,
};
