import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';


const BannerContent = () => {
  return (
    <BannerWrapper>
        <Slide direction="left">
      <BannerTitle>Affordability Calculator</BannerTitle>
      <BannerSubTitle>SubTitle</BannerSubTitle>
      <BannerLine />

      </Slide>
      
    </BannerWrapper>
  );
};

export default BannerContent;

const BannerWrapper = styled.div`
  text-align: center;
  padding-top: 20vh; 
`;

const BannerTitle = styled.h1`
  color: var(--white);
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