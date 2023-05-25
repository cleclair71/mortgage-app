import React from 'react';
import styled from 'styled-components';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';

const About = () => {
  return (
    <Container>
      <ImageWrapper>
        <StyledImage src="path-to-your-image.jpg" alt="Dora" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>
          <h1>About Dora</h1>
          <StyledLine />
        </Title>
        <Description>
          Dora is a passionate and dedicated software developer...
        </Description>
        <StyledButton>Contact</StyledButton>
        <IconWrapper>
          <TfiFacebook style={{marginRight: '10px'}} size={40} />
          <TfiLinkedin size={40} />
        </IconWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 0;
  height: 100vh;
        @media (max-width: 640px) {
          height: 100%;
        padding-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  width: 50%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  h1 {
    font-size: 2.5rem;
    color: var(--white);
    text-decoration: none;
    transition: all 400ms ease-in-out;
    opacity: .6;
    :hover {
      opacity: 1;
    }
  }
`;

const StyledLine = styled.hr`
  margin-top: 1rem;
  width: 100%;
  border: 1px solid var(--white);
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: var(--white);
  opacity: 0.6;
  transition: all 400ms ease-in-out;
  :hover {
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 10px 20px;
  background-color: var(--white);
  color: black;
  border: none;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  :hover {
    background-color: grey;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--white);
  margin-top: 1rem;
`;