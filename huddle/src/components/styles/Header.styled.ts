import styled from 'styled-components';
import { ITheme } from '../../App';

interface IProps {
    theme: ITheme;
}

export const StyledHeader = styled.header`
    background-color: ${({ theme }: IProps) => theme.colors.header};
    padding: 40px 0;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
        margin-bottom: 40px;
    }
`;

export const Content = styled.div``;

export const ContentTitle = styled.h1``;

export const ContentBody = styled.p``;

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
        margin: 40px 0 30px;
    }
`;