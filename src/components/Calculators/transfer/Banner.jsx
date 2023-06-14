import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';


const BannerContent = () => {
  return (
    <BannerWrapper>
        <Slide direction="left">
      <BannerTitle>Transfer Calculator</BannerTitle>

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


const BannerLine = styled.hr`
  width: 5%;
  border: 1px solid var(--white);
  margin: 0 auto;
  margin-top: 30px;
`;