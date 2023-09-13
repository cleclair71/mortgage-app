// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FiChevronDown } from 'react-icons/fi';
// import Button from '../../Partials/Button';

// export const Container = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 90%;
//     margin: 0 auto;
//     padding: 1.5rem 0;
//     position: relative;
//     animation: header 500ms ease-in-out;

//     @media(max-width: 840px){
//         width: 90%;
//     }

//     .bars{
//         display: none;
//         @media (max-width: 640px) {
//             width: 40px;
//             height: 40px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             position: relative;
//             z-index: 100;
//             padding: 0.5rem;

//             .bar {
//                 position: absolute;
//                 width: 100%;
//                 height: 2px;
//                 background-color: ${props => props.bar ? "transparent" : "var(--white)"};
//                 transition: background-color 400ms ease-in-out;
//                 :before, :after {
//                     content: "";
//                     height: 2px;
//                     width: 100%;
//                     background-color: var(--white);
//                     position: absolute;
//                 }
//                 :before{
//                     transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
//                     transition: all 400ms ease-in-out;
//                 }
//                 :after{
//                     transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
//                     transition: all 400ms ease-in-out;
//                 }
//             }
//         }
//     }
// `

// export const Dropdown = styled.div`
//     display: none; // initially set to none
//     flex-direction: column; // add this line to stack items vertically
//     position: absolute;
//     background-color: var(--background);
//     padding: 1rem;
//     border-radius: 5px;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//     z-index: 999;
//     width: 200px;
//     top: 40px;
//     opacity: 0; // start invisible
   

//     @media(max-width: 640px) {
//         position: static;
//         background-color: transparent;
//         box-shadow: none;
//         display: flex; // ensure it's visible on mobile
//         flex-direction: column; // add this line to stack items vertically on mobile
//     }
// `;

// export const DropdownLink = styled(Link)`
//     color: var(--text);
//     text-decoration: none;
//     font-size: 1.2rem;
//     display: block;
//     margin-bottom: 1rem;
//     :hover {
//         font-weight: bolder !important;; 
//     }
// `;

// export const Logo = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     span {
//         font-size: 2rem;
//     }
//     h1 {
//         font-size: 1.5rem;
//         font-weight: 200;
//         text-transform: uppercase;
//     }
// `

// export const Nav = styled.div`
//     display: flex;
//     align-items: center;

//     @media (max-width: 640px) {
//         position: fixed;
//         flex-direction: column;
//         background-color: var(--white);
//         inset: 0;
//         justify-content: center;
//         align-items: center;
//         gap: 2rem;
//         font-weight: 700;
//         height: ${props => props.bar ? "100vh" : 0};
//         z-index: 100;
//         overflow: hidden;
//         transition: height 400ms ease-in-out;
//     }
// `;

// export const NavItem = styled.span`
//     position: relative;
//     margin-left: 1rem;
//     align-items: center;

//     &:hover ${Dropdown} {
//         display: flex;
//         background-color: var(--white);
//         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//         opacity: 1;
//     }

//     a {
//         color: var(--text);
//         text-decoration: none;
//         font-size: 1.1rem;
//         padding: 0.5rem;
//         position: relative;
//         font-weight: 300;
//         :before {
//             content: "";
//             position: absolute;
//             left: 0;
//             right: 0;
//             bottom: -2px;
//             height: 2px;
//             background-color: var(--text);
//             transform: scaleX(0);
//             transform-origin: right;
//             transition: transform 400ms ease-in-out;
//         }
//         :hover:before {
//             transform: scaleX(1);
//             transform-origin: left;
//             transition: transform 400ms ease-in-out;
//         }
//         :hover {
//             font-weight: bolder;
//             transition: transform 400ms ease-in-out;
//         }
//     }
// `;

// export const StyledChevron = styled(FiChevronDown)`
//     color: var(--text);
//     vertical-align: middle;
//     opacity: 0.8;
//     padding-left: 0.2rem;
//     font-size: 0.9em; /* adjust this value as needed */
// `;

// export const StyledButton = styled(Button)`
//   font-size: 0.7em;
//   padding: 10px 20px;
//   margin: 0;
// `;

// HeaderStyles.jsx

// You'll adjust these styles according to the design you have in mind. Here's an example.
// For this, I'm suggesting you use styled-components and the CSS in JS approach Chakra UI uses.



import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

export const NavbarContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavbarItem = styled(Box)`
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;

export const NavbarLogo = styled(Box)`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const NavbarMenu = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export const NavbarButton = styled(Box)`
    color: white;
    background-color: blue;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`;