import React from 'react';
import styled from '@emotion/styled';
import heroImage from '../assets/images/hero-image.png';

const HeroContainer = styled.section`
  padding: 96px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const HeroTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 120px;
  line-height: 1em;
  text-align: center;
  color: #1B2128;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 80px;
  }
  
  @media (max-width: 640px) {
    font-size: 48px;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background-color: #FBFCFE;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(251, 252, 254, 0) 0%, rgba(251, 252, 254, 1) 100%);
    pointer-events: none;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>Streamline Compliance Training</HeroTitle>
      <HeroImage />
    </HeroContainer>
  );
};

export default Hero; 