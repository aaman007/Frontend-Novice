import styled from 'styled-components';

interface IProps {
    bg?: string;
}

export const Button = styled.button`
    border: none;
    border-radius: 50px;
    padding: 15px 60px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background-color: ${({bg}: IProps) => bg || '#fff'};
    color: ${({color}) => color || '#333'};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;