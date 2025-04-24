import React from 'react';
import styled from '@emotion/styled';
import automationImg from '../assets/images/automation.png';
import analyticsImg from '../assets/images/analytics.png';
import engagementImg from '../assets/images/engagement.png';
import libraryImg from '../assets/images/library.png';

const MainContainer = styled.div`
  width: 100%;
  background: #FFFFFF;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const FeaturesTitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.08em;
  text-align: center;
  color: #1B2128;
  margin: 0;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;

const FeaturesRow = styled.div`
  display: flex;
  gap: 28px;
  width: 100%;
`;

const FeatureCard = styled.div<{ isLarge?: boolean }>`
  background: rgba(37, 78, 126, 0.09);
  border-radius: 20px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: ${props => props.isLarge ? '1.75' : '1'};
  min-height: 240px;
`;

const FeatureTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14em;
  color: #1B2128;
  margin: 0;
`;

const FeatureDescription = styled.p`
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5em;
  color: #1B2128;
  margin: 0;
  opacity: 0.8;
`;

const FeatureImage = styled.div<{ height?: string }>`
  width: 100%;
  height: ${props => props.height || '160px'};
  border-radius: 12px;
  overflow: hidden;
  margin-top: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const features = [
  {
    title: 'Automated Learning Plans',
    description: 'Create personalized learning paths that adapt to each employee\'s needs and progress. Our AI-powered system ensures optimal skill development.',
    image: automationImg,
    isLarge: true,
  },
  {
    title: 'Real-Time Progress Tracking',
    description: 'Monitor team performance with comprehensive analytics and insights.',
    image: analyticsImg,
  },
  {
    title: 'Interactive Content Library',
    description: 'Access a vast collection of engaging learning materials.',
    image: engagementImg,
  },
  {
    title: 'Team Collaboration Tools',
    description: 'Foster teamwork with built-in collaboration features.',
    image: libraryImg,
    isLarge: true,
  },
];

const Features: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <FeaturesTitle>Empower Your Team</FeaturesTitle>
        <FeaturesGrid>
          <FeaturesRow>
            <FeatureCard isLarge={true}>
              <FeatureTitle>{features[0].title}</FeatureTitle>
              <FeatureDescription>{features[0].description}</FeatureDescription>
              <FeatureImage 
                height="300px"
                style={{ backgroundImage: `url(${features[0].image})` }}
              />
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>{features[1].title}</FeatureTitle>
              <FeatureDescription>{features[1].description}</FeatureDescription>
              <FeatureImage 
                height="160px"
                style={{ backgroundImage: `url(${features[1].image})` }}
              />
            </FeatureCard>
          </FeaturesRow>
          <FeaturesRow>
            <FeatureCard>
              <FeatureTitle>{features[2].title}</FeatureTitle>
              <FeatureDescription>{features[2].description}</FeatureDescription>
              <FeatureImage 
                height="160px"
                style={{ backgroundImage: `url(${features[2].image})` }}
              />
            </FeatureCard>
            <FeatureCard isLarge={true}>
              <FeatureTitle>{features[3].title}</FeatureTitle>
              <FeatureDescription>{features[3].description}</FeatureDescription>
              <FeatureImage 
                height="300px"
                style={{ backgroundImage: `url(${features[3].image})` }}
              />
            </FeatureCard>
          </FeaturesRow>
        </FeaturesGrid>
      </ContentContainer>
    </MainContainer>
  );
};

export default Features; 