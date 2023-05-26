import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import Button from '../Partials/Button';

const BannerContent = () => {
  return (
    <BannerWrapper>
        <Slide direction="left">
      <BannerTitle>Title</BannerTitle>
      <BannerSubTitle>SubTitle</BannerSubTitle>
      <BannerLine />
      <Button onClick={() => console.log("Button 2 clicked!")}>Contact</Button>
      </Slide>
      
    </BannerWrapper>
  );
};

export default BannerContent;

const BannerWrapper = styled.div`
  text-align: center;
  padding-top: 40vh; 
`;

const BannerTitle = styled.h1`
  color: var(--text);
  text-transform: uppercase;
    font-size: 5vw;
`;

const BannerSubTitle = styled.h2`
  color: var(--text);
  font-size: 2vw;
`;

const BannerLine = styled.hr`
  width: 5%;
  border: 1px solid var(--text);
  margin: 0 auto;
  margin-top: 30px;
`;