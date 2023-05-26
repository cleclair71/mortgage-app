import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, ...otherProps }) => {
    return <StyledButton onClick={onClick} {...otherProps}>{children}</StyledButton>
}

export default Button;

const StyledButton = styled.button`
margin-top: 20px;
padding: 10px;
color: var(--text);
background-color: rgba(253, 253, 253, 0.4);
backdrop-filter: blur(1px);
border: 2px solid rgba(69, 74, 68, 0.6);
padding: 0.7rem 1.4rem;
margin-top: 2rem;
cursor: pointer;
font-weight: 600;
letter-spacing: 0.2rem;
font-size: .8rem;
text-transform: uppercase;
font-weight: 900;
transition: all 0.2s ease-out;
border-radius: 1px;
    :hover {
          background-color: rgba(253, 253, 253, 0.8);
          filter: drop-shadow(0px 8px 8px #454a44);
          transition: all 0.2s ease-out;
          border: 2px solid var(--text);
      }
`;