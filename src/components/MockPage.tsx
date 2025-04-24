import React from 'react';
import styled from '@emotion/styled';

const MockPageContainer = styled.div`
  padding: 96px 48px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FBFCFE;
`;

const MockPageTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.08em;
  text-align: center;
  color: #1B2128;
  margin: 0 0 24px;
`;

const MockPageContent = styled.div`
  max-width: 600px;
  text-align: center;
`;

const MockPageText = styled.p`
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2em;
  color: #1B2128;
  margin: 0;
  opacity: 0.8;
`;

interface MockPageProps {
  title: string;
}

const MockPage: React.FC<MockPageProps> = ({ title }) => {
  return (
    <MockPageContainer>
      <MockPageContent>
        <MockPageTitle>{title} Page</MockPageTitle>
        <MockPageText>
          This is a mock {title.toLowerCase()} page. In a real application, this would contain
          specific content related to {title.toLowerCase()}.
        </MockPageText>
      </MockPageContent>
    </MockPageContainer>
  );
};

export default MockPage; 