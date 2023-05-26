import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Partials/Button';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
    const [bar, setBar] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutId = useRef(null);

    const handleMouseEnter = (name) => {
        clearTimeout(timeoutId.current);
        setActiveDropdown(name);
    };
    
    const handleMouseLeave = () => {
        timeoutId.current = setTimeout(() => setActiveDropdown(null), 300); // decrease the delay to 300ms
    };

    return (
        <Container bar={bar}>
            <Logo>
                <h1><Link to="/">LOGO</Link></h1>
            </Logo>
            <Nav bar={bar}>
                <NavItem onMouseEnter={() => handleMouseEnter('mortgages')} onMouseLeave={handleMouseLeave}>
                    <Link to="/mortgages">Mortgages<StyledChevron/></Link>
                    {activeDropdown === 'mortgages' && (
                        <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
                            <DropdownLink to="/home-purchase">Home Purchase</DropdownLink>
                            <DropdownLink to="/refinance">Refinance</DropdownLink>
                            <DropdownLink to="/renewal">Renewal</DropdownLink>
                            <DropdownLink to="/second-mortgage">Second Mortgage</DropdownLink>
                            <DropdownLink to="/commercial-mortgage">Commercial Mortgage</DropdownLink>
                            <DropdownLink to="/debt-consolidation">Debt Consolidation</DropdownLink>
                            <DropdownLink to="/home-equity-mortgage">Home Equity Mortgage</DropdownLink>
                            <DropdownLink to="/private-mortgage">Private Mortgage</DropdownLink>
                        </Dropdown>
                    )}
                </NavItem>
                <NavItem onMouseEnter={() => handleMouseEnter('calculators')} onMouseLeave={handleMouseLeave}>
                    <Link to="/calculators">Calculators<StyledChevron/></Link>
                    {activeDropdown === 'calculators' && (
                        <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
                            <DropdownLink to="/affordability-calculator">Affordability Calculator</DropdownLink>
                            <DropdownLink to="/payment-calculator">Payment Calculator</DropdownLink>
                            <DropdownLink to="/cmhc-calculator">CMHC Calculator</DropdownLink>
                            <DropdownLink to="/land-transfer-tax-calculator">Land Transfer Tax Calculator</DropdownLink>
                            <DropdownLink to="/renewal-calculator">Renewal Calculator</DropdownLink>
                        </Dropdown>
                    )}
                </NavItem>
                <NavItem><Link to="/rates">Rates</Link></NavItem>
                <NavItem onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
                    <Link to="/about">About<StyledChevron/></Link>
                    {activeDropdown === 'about' && (
                        <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
                            <DropdownLink to="/about-us">About Us</DropdownLink>
                            <DropdownLink to="/contact-us">Contact Us</DropdownLink>
                            <DropdownLink to="/mortgage-professionals">Mortgage Professionals</DropdownLink>
                        </Dropdown>
                    )}
                </NavItem>
                <NavItem onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
                    <Link to="/resources">Resources<StyledChevron/></Link>
                    {activeDropdown === 'resources' && (
                        <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
                            <DropdownLink to="/faq">FAQ</DropdownLink>
                            <DropdownLink to="/glossary">Glossary</DropdownLink>
                            <DropdownLink to="/why-use-us">Why use us?</DropdownLink>
                        </Dropdown>
                    )}
                </NavItem>
                <NavItem>
  <span>
    <StyledButton onClick={() => console.log("Button 2 clicked!")}>
      Apply now
    </StyledButton>
  </span>
</NavItem>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;

    @media(max-width: 840px){
        width: 90%;
    }

    .bars{
        display: none;
        @media (max-width: 640px) {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 100;
            padding: 0.5rem;

            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "var(--white)"};
                transition: background-color 400ms ease-in-out;
                :before, :after {
                    content: "";
                    height: 2px;
                    width: 100%;
                    background-color: var(--white);
                    position: absolute;
                }
                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }
                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`

const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: var(--background);
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 999;
    width: 200px;
    top: 40px; 
    opacity: 0; // start invisible
    transition: opacity 0.3s ease-in-out; 

    @media(max-width: 640px) {
        position: static;
        background-color: transparent;
        box-shadow: none;
    }
`;

const DropdownLink = styled(Link)`
    color: var(--text);
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 1rem;
    :hover {
        font-weight: bolder !important;; 
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        font-size: 2rem;
    }
    h1 {
        font-size: 1.5rem;
        font-weight: 200;
        text-transform: uppercase;
    }
`

const Nav = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 640px) {
        position: fixed;
        flex-direction: column;
        background-color: var(--white);
        inset: 0;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        z-index: 100;
        overflow: hidden;
        transition: height 400ms ease-in-out;
    }
`;

const NavItem = styled.span`
    position: relative;
    margin-left: 1rem;
    align-items: center;

    &:hover ${Dropdown} {
        display: block;
        background-color: var(--white);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        opacity: 1;
    }

    a {
        color: var(--text);
        text-decoration: none;
        font-size: 1.1rem;
        padding: 0.5rem;
        position: relative;
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

const StyledChevron = styled(FiChevronDown)`
    color: var(--text);
    vertical-align: middle;
    opacity: 0.8;
    padding-left: 0.2rem;
    font-size: 0.9em; /* adjust this value as needed */
`;

const StyledButton = styled(Button)`
  font-size: 0.7em;
  padding: 10px 20px;
  margin: 0;
`;



