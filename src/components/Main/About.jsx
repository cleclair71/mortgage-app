import React from 'react';
import styled from 'styled-components';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import AboutImage from '../../assets/pexels-melike-benli-10093329.jpg';
import Button from '../Partials/Button';
const About = () => {
  return (
    <Container>
      <ImageWrapper>
        <StyledImage />
      </ImageWrapper>
      <ContentWrapper>
        <Title>
          <h1>About Dora</h1>
          <StyledLine />
        </Title>
        <Description>
          Dora is a passionate and dedicated software developer...
        </Description>
        <Button onClick={() => console.log("Button 2 clicked!")}>Contact</Button>
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
  width: 100%;
  
  margin: 0 auto;
  padding: 1.5rem 0;
  height: 100vh;
        @media (max-width: 640px) {
          height: 100%;
        padding-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  width: 50%;
  background: url(${AboutImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
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
    color: var(--text);
    text-decoration: none;
    transition: all 400ms ease-in-out;
    opacity: .6;
    :hover {
      opacity: 1;
    }
  }
`;

const StyledLine = styled.hr`
  
  width: 15%;
  border: 1px solid var(--text);
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  opacity: 0.6;
  transition: all 400ms ease-in-out;
  margin-bottom: 2rem;
  :hover {
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--text);
  margin-top: 1rem;
  width: 60px;
`;