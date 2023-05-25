import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [bar, setBar] = useState(false);
    return (
        <Nav bar={bar}>
            <span><Link to="/mortgages">Mortgages</Link></span>
            <span><Link to="/calculators">Calculators</Link></span>
            <span><Link to="/rates">Rates</Link></span>
            <span><Link to="/mortgages">About</Link></span>
            <span><Link to="/mortgages">Apply Now</Link></span>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.div`
@media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(20px);
    background: rgba(255,255,255,0.3);
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
span {
    margin-left: 1rem;
    a {
        color: #0000;
        text-decoration: none;
        
        font-size: 1.8rem;
        position: relative;
        font-weight: 300;
        :before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 2px;
            background-color: #0000;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
            }
            :hover:before {
                transform: scaleX(1);
                transform-origin: left;
                }
                :hover {
                    opacity: 0.8;
                    }
                    }
                    };`