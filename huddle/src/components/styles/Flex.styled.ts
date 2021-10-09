import styled from 'styled-components';
import { ITheme } from '../../App';

interface IProps {
    theme: ITheme;
}

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }

    @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`;