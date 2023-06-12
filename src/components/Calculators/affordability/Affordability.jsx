import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MortgageCalculator = () => {
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = "https://www.ratehub.ca/assets/js/widget-loader.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
    }, []);

    return (
        <MortgageCalculatorContainer>
            <Content>
                <MortgageCalculatorTitle>Mortgage Affordability Calculator</MortgageCalculatorTitle>
                <CalculatorWidget data-widget="calc-affordability" data-province="ON" data-lang="en" />
                <LogoLink href="https://www.ratehub.ca/">
                    <LogoImage src="https://www.ratehub.ca/assets/images/widget-logo.png" alt="Ratehub.ca logo" />
                </LogoLink>
            </Content>
            <Sidebar>
                <SidebarLink to="/affordability">Affordability Calculator</SidebarLink>
                <SidebarLink to="/payment-calculator">Payment Calculator</SidebarLink>
                <SidebarLink to="/cmhc-calculator">CMHC Calculator</SidebarLink>
                <SidebarLink to="/land-transfer">Land Transfer Tax Calculator</SidebarLink>
                <SidebarLink to="/renewal-calculator">Renewal Calculator</SidebarLink>
            </Sidebar>
        </MortgageCalculatorContainer>
    );
};

export default MortgageCalculator;

const MortgageCalculatorContainer = styled.div`
width: 80%;
margin: auto;
background-color: var(--white);
margin-top: -16em;
padding: 2em;
display: flex;
flex-direction: row;  // Change from column to row

@media (max-width: 768px) { // Adjust this to the breakpoint you want
  flex-direction: column;
}
`;

const MortgageCalculatorTitle = styled.h2`
  
  font-size: 1.6em;
  font-weight: 400;
  margin-top: 0;
  text-decoration: none;
  color: var(--text);
  padding-bottom: 1em;
`;

const CalculatorWidget = styled.div`
  // Please replace 'calc-affordability' and other data values with actual data attributes.
  // data-widget: calc-affordability;
  // data-province: ON;
  // data-lang: en;
  align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: 100%;

`;

const LogoLink = styled.a`
  display: inline-block;
  width: 80%;
  margin-top: .5em;
  text-align: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 10%;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex: 2;  // Set flex to 2 to take up 2/3 of the container
`;

const Sidebar = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: top;
padding: 1em;
border-left: 1px solid var(--gray);
flex: 1;  // Set flex to 1 to take up 1/3 of the container
`;

const SidebarLink = styled(Link)`
    color: var(--text);
    text-decoration: none;
    margin-bottom: 1em;
    :hover {
        color: var(--highlight);
    }
`;

// Your script tag might be necessary but won't be styled. 
// If it needs to be inserted with react, use the useEffect hook or a similar method