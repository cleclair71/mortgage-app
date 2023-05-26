import React from 'react';
import { Link } from 'react-router-dom';
import { useHeader } from './HeaderHooks';
import { 
  Container, Dropdown, DropdownLink, Logo, Nav, 
  NavItem, StyledChevron, StyledButton 
} from './HeaderStyles';

const Header = () => {
    const { 
        bar, 
        setBar, 
        activeDropdown, 
        setActiveDropdown, 
        handleMouseEnter, 
        handleMouseLeave,
        timeoutId, // destructure timeoutId here
    } = useHeader();


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





