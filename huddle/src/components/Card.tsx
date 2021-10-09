import React from 'react';
import { 
    StyledCard,
    Content,
    ContentTitle,
    ContentBody,
    ImageWrapper,
    Image
} from './styles/Card.styled';
import { IContent } from '../data/content';

interface IProps {
    item: IContent;
}

const Card: React.FC<IProps> = ({ item: { id, title, body, image } }) => {
    return (
        <StyledCard layout={id % 2 === 0 ? 'row-reverse' : 'row'}>
            <Content>
                <ContentTitle> {title} </ContentTitle>
                <ContentBody> {body} </ContentBody>
            </Content>

            <ImageWrapper>
                <Image src={`images/${image}`} alt='' />
            </ImageWrapper>
        </StyledCard>
    )
}

export default Card;
