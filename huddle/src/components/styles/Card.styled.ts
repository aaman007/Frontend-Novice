import styled from 'styled-components';
import { ITheme } from '../../App';

interface IDivProps {
    theme: ITheme;
    layout?: string;
}

interface IImageProps {
    theme: ITheme;
    src: string;
    alt?: string;
}

export const StyledCard = styled.div<IDivProps>`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({layout}) => layout ? layout : 'row'};

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Content = styled.div`
    flex: 1;
`;

export const ContentTitle = styled.h2``;

export const ContentBody = styled.p``;

export const ImageWrapper = styled.div`
    flex: 1;
    text-align: center;
`;

export const Image = styled.img`
    width: 80%;
    justify-self: center;

    @media (max-width: ${({theme}: IImageProps) => theme.breakpoints.mobile}) {
        margin: 40px 0 30px;
    }
`;