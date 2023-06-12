import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHeader } from '../../Main/header/HeaderHooks';

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

    const { 
        bar, 
        setBar,  
    } = useHeader();

    return (
        <MortgageCalculatorContainer bar={bar}>
            <Content>
               
                <CalculatorWidget data-widget="calc-affordability" data-province="ON" data-lang="en" />
                <LogoLink href="https://www.ratehub.ca/">
                    <LogoImage src="https://www.ratehub.ca/assets/images/widget-logo.png" alt="Ratehub.ca logo" />
                </LogoLink>
            </Content>
            <Sidebar bar={bar}>
                <SidebarLink bar={bar} setBar={setBar} to="/affordability">Affordability Calculator</SidebarLink>
                <SidebarLink bar={bar} setBar={setBar} to="/payment-calculator">Payment Calculator</SidebarLink>
                <SidebarLink bar={bar} setBar={setBar} to="/cmhc-calculator">CMHC Calculator</SidebarLink>
                <SidebarLink bar={bar} setBar={setBar} to="/land-transfer">Land Transfer Tax Calculator</SidebarLink>
                <SidebarLink bar={bar} setBar={setBar} to="/renewal-calculator">Renewal Calculator</SidebarLink>
            </Sidebar>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </MortgageCalculatorContainer>
    );

};


export default MortgageCalculator;

const MortgageCalculatorContainer = styled.div`
padding-bottom: 3em;
width: 80%;
margin: auto;
background-color: var(--white);
margin-top: -16em;
padding: 2em;
display: flex;
flex-direction: row;  // Change from column to row
box-shadow: 0 0 10px rgba(0,0,0,0.2);

@media (max-width: 768px) { // Adjust this to the breakpoint you want
  flex-direction: column;
}
`;


// const MortgageCalculatorTitle = styled.h2`
//   font-weight: 300;
//   font-size: 1.6em;
//   margin-top: 40px;

//   color: var(--text);
//   text-decoration: none;
//   transition: all 400ms ease-in-out;
//   opacity: .6;
//   margin-top: 0;
//   text-decoration: none;
//   color: var(--text);
//   padding-bottom: 1em;
// `;

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
padding-left: 2em !important;
padding: 1em;
border-left: 1px solid var(--gray);
flex: 1;  // Set flex to 1 to take up 1/3 of the container
`;

const SidebarLink = styled(Link)`
    color: var(--text);
    text-decoration: none;
    margin-bottom: 2em;
    position: relative;
    padding: 0.5rem;
        font-weight: 300;
        :before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 2px;
            background-color: var(--text);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
        }
        :hover:before {
            transform: scaleX(1);
            transform-origin: left;
            transition: transform 400ms ease-in-out;
        }
        :hover {
            font-weight: bolder;
            transition: transform 400ms ease-in-out;
        }
    }
`;

