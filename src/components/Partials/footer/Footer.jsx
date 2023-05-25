import React from 'react'
import { FooterContainer, Wrapper, Row, Column, FooterLink, Title, Icon } from './FooterStyles'

export default function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
            <Row>
                <Column>
                <Title>About Us</Title>
                    <FooterLink href="#">Story</FooterLink>
                    <FooterLink href="#">Clients</FooterLink>
                    <FooterLink href="#">Testimonials</FooterLink>
                </Column>
                <Column>
                <Title>Services</Title>
                    <FooterLink href="#">Marketing</FooterLink>
                    <FooterLink href="#">Consulting</FooterLink>
                    <FooterLink href="#">Development</FooterLink>
                    <FooterLink href="#">Design</FooterLink>
                </Column>
                <Column>
                <Title>Contact Us</Title>
                    <FooterLink href="#">United States</FooterLink>
                    <FooterLink href="#">United Kingdom</FooterLink>
                    <FooterLink href="#">Australia</FooterLink>
                    <FooterLink href="#">Support</FooterLink>
                </Column>
                <Column>
                <Title>Social</Title>
                    <FooterLink href="#"><Icon className="fab fa-facebook-f" />Facebook</FooterLink>
                    <FooterLink href="#"><Icon className="fab fa-instagram" />Instagram</FooterLink>
                    <FooterLink href="#"><Icon className="fab fa-youtube" />Youtube</FooterLink>
                    <FooterLink href="#"><Icon className="fab fa-twitter" />Twitter</FooterLink>
                </Column>
            </Row>
            </Wrapper>
        </FooterContainer>
           )
        }