import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  padding: 96px 48px 50px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background-color: #FBFCFE;
`;

const FooterDivider = styled.div`
  height: 1px;
  background-color: rgba(73, 90, 110, 0.2);
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Logo = styled.div`
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

const LogoText = styled.h2`
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1em;
  letter-spacing: -0.04em;
  color: #2274D4;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  background-color: rgba(20, 32, 46, 0.62);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #FFFFFF;
  
  &:hover {
    background-color: #2274D4;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 50px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
`;

const ColumnTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.33em;
  color: #1B2128;
  margin: 0;
`;

const FooterLink = styled(Link)`
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.33em;
  color: rgba(20, 32, 46, 0.62);
  text-decoration: none;
  
  &:hover {
    color: #2274D4;
  }
`;

const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Case Studies', 'Webinars', 'Events'],
  },
  {
    title: 'Community',
    links: ['Forums', 'Partners', 'Refer a Friend', 'Affiliates'],
  },
];

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterDivider />
      <FooterContent>
        <LogoContainer>
          <Logo>
            <LogoMark />
            <LogoText>ComplyWise</LogoText>
          </Logo>
          <SocialLinks>
            <SocialIcon href="#">f</SocialIcon>
            <SocialIcon href="#">i</SocialIcon>
            <SocialIcon href="#">t</SocialIcon>
          </SocialLinks>
        </LogoContainer>
        <FooterLinks>
          {footerLinks.map((column, index) => (
            <FooterColumn key={index}>
              <ColumnTitle>{column.title}</ColumnTitle>
              {column.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                  {link}
                </FooterLink>
              ))}
            </FooterColumn>
          ))}
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 