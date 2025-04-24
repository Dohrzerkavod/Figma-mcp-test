import React from 'react';
import styled from '@emotion/styled';
import avatar1 from '../assets/images/avatar-1.png';
import avatar2 from '../assets/images/avatar-2.png';
import avatar3 from '../assets/images/avatar-3.png';
import avatar4 from '../assets/images/avatar-4.png';
import avatar5 from '../assets/images/avatar-5.png';
import avatar6 from '../assets/images/avatar-6.png';

const TestimonialsContainer = styled.section`
  padding: 50px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const TestimonialsTitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.08em;
  text-align: center;
  color: #1B2128;
  margin: 0;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: rgba(37, 78, 126, 0.09);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.div<{ image: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProfileName = styled.h4`
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.33em;
  color: #1B2128;
  margin: 0;
`;

const ProfileRole = styled.p`
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.33em;
  color: rgba(20, 32, 46, 0.62);
  margin: 0;
`;

const TestimonialQuote = styled.p`
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2em;
  color: #1B2128;
  margin: 0;
  opacity: 0.8;
`;

const testimonials = [
  {
    name: 'Elara Wintour',
    role: 'Head of HR',
    quote: 'ComplyWise transformed our compliance training process.',
    avatar: avatar1,
  },
  {
    name: 'Kai Jansen',
    role: 'Learning & Development Manager',
    quote: 'A seamless experience for both admins and learners.',
    avatar: avatar2,
  },
  {
    name: 'Riya Patel',
    role: 'Compliance Officer',
    quote: 'The analytics feature is a game-changer.',
    avatar: avatar3,
  },
  {
    name: 'Niko Santorini',
    role: 'Training Coordinator',
    quote: 'Our team loves the interactive modules.',
    avatar: avatar4,
  },
  {
    name: 'Anya Novak',
    role: 'HR Specialist',
    quote: 'Setting up learning plans has never been easier.',
    avatar: avatar5,
  },
  {
    name: 'Liam Zhang',
    role: 'Operations Manager',
    quote: 'Highly recommend for compliance training.',
    avatar: avatar6,
  },
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialHeader>
              <ProfileImage image={testimonial.avatar} />
              <ProfileInfo>
                <ProfileName>{testimonial.name}</ProfileName>
                <ProfileRole>{testimonial.role}</ProfileRole>
              </ProfileInfo>
            </TestimonialHeader>
            <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials; 