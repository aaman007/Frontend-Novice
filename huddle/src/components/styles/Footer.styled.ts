import styled from 'styled-components';
import { ITheme } from '../../App';

interface IProps {
    theme: ITheme;
}

export const StyledFooter = styled.footer`
    background-color: ${({theme}: IProps) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;

    @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
        text-align: center;
    }
`;

export const UnorderedList = styled.ul`
    list-style-type: none;

    @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
        padding: 0;
    }
`;

export const ListItem = styled.li`
    margin-bottom: 20px;
`;

export const Copyright = styled.p`
    text-align: center;
`;