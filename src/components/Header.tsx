import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  padding: 18px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FBFCFE;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LogoMark = styled.div`
  width: 32px;
  height: 32px;
  background-color: #2274D4;
  border-radius: 4px;
`;

const LogoText = styled.h1`
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1em;
  letter-spacing: -0.04em;
  color: #2274D4;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 36px;
`;

const NavLink = styled(Link)`
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.33em;
  color: #1B2128;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #2274D4;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const Button = styled(Link)`
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.33em;
  color: #1B2128;
  text-decoration: none;
  
  &:last-child {
    background-color: #4A90E2;
    color: #010204;
    padding: 8px 18px;
    border-radius: 16px;
    
    &:hover {
      background-color: #2274D4;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoMark />
        <LogoText>ComplyWise</LogoText>
      </LogoContainer>
      <NavLinks>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
      <ButtonGroup>
        <Button to="/download">Download app</Button>
        <Button to="/login">Log in</Button>
        <Button to="/try">Try it free</Button>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header; 