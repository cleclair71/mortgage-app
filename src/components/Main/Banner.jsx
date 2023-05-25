import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const BannerContent = () => {
  return (
    <BannerWrapper>
        <Slide direction="left">
      <BannerTitle>Title</BannerTitle>
      <BannerSubTitle>SubTitle</BannerSubTitle>
      <BannerLine />
      <BannerButton>Contact</BannerButton>
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
`;

const BannerSubTitle = styled.h2`
  color: var(--text);
`;

const BannerButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  color: var(--text);
  background-color: rgba(255, 248, 244, 0.5);
  border: 2px solid var(--text);
  padding: 0.7rem 1.4rem;
        margin-top: 2rem;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 0.2rem;
        font-size: .8rem;
        filter: drop-shadow(0px 8px 8px #13262a);
        transition: all 0.2s ease-out;
        border-radius: 1px;
        :hover {
            background-color: rgba(255, 248, 244, 0.2);
            transition: all 0.2s ease-out;
        }
`;

const BannerLine = styled.hr`
  width: 5%;
  border: 1px solid var(--text);
  margin: 0 auto;
  margin-top: 30px;
`;