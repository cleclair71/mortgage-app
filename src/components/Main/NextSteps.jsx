import React from 'react';
import styled from 'styled-components';

const NextSteps = () => {
  const steps = [
    { title: 'Step 1', description: 'Description for step 1' },
    { title: 'Step 2', description: 'Description for step 2' },
    { title: 'Step 3', description: 'Description for step 3' },
    { title: 'Step 4', description: 'Description for step 4' },
  ];

  return (
    <Container>
      <Title>
        <h1>Next Steps</h1>
        <StyledLine />
      </Title>
      <CardsContainer>
        {steps.map((step, index) => (
          <Card key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <StyledButton>Go</StyledButton>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default NextSteps;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 0;
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  width: 20%;
  min-width: 200px;
  h3 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 10px 20px;
  background-color: black;
  color: var(--white);
  border: none;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  :hover {
    background-color: grey;
  }
`;