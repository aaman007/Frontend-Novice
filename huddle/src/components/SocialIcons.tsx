import React from 'react';
import { StyledSocialIcons, IconWrapper, Icon } from './styles/SocialIcons.styled';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
    return (
        <StyledSocialIcons>
            <IconWrapper>
                <Icon href="https://github.com/"> <FaTwitter />  </Icon>
            </IconWrapper>

            <IconWrapper>
            <   Icon href="https://github.com/"> <FaFacebook />  </Icon>
            </IconWrapper>

            <IconWrapper>
                <Icon href="https://github.com/"> <FaInstagram /> </Icon>
            </IconWrapper>
        </StyledSocialIcons>
    )
}

export default SocialIcons;
