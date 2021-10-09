import React from 'react';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter, UnorderedList, ListItem, Copyright } from './styles/Footer.styled';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Container>
                <img src='images/logo_white.svg' alt='logo' />
                <Flex>
                    <UnorderedList>
                        <ListItem>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </ListItem>
                        <ListItem>+1-543-123-4567</ListItem>
                        <ListItem>example@huddle.com</ListItem>
                    </UnorderedList>

                    <UnorderedList>
                        <ListItem>About Us</ListItem>
                        <ListItem>What We Do</ListItem>
                        <ListItem>FAQ</ListItem>
                    </UnorderedList>

                    <UnorderedList>
                        <ListItem>Career</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Contact Us</ListItem>
                    </UnorderedList>

                    <SocialIcons />
                </Flex>

                <Copyright>&copy; 2021 Huddle. All rights reserved</Copyright>
            </Container>
        </StyledFooter>
    )
}

export default Footer;
