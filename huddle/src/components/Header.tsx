import React from 'react';

import { 
    StyledHeader, 
    Nav, 
    Logo, 
    Content,
    ContentTitle, 
    ContentBody,
    Image
} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='/images/logo.svg' alt='' />
                    <Button> Try it out </Button>
                </Nav>

                <Flex>
                    <Content>
                        <ContentTitle>Build The Community Your Fans Will Love</ContentTitle>
                        <ContentBody>
                            Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </ContentBody>
                        <Button bg='#ff0099' color='#fff'>Get Started For freeze</Button>
                    </Content>

                    <Image src='/images/illustration-mockups.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header;
