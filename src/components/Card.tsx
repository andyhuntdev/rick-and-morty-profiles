import { FC, useState } from 'react';
import styled from 'styled-components';
import { contrast, skin } from '../assets/colors';
import { ICharacter } from '../types/data';
import Button, { StyledButton } from './Button';

const StyledCard = styled.div`
    border-radius: 1rem;
    border: 1px solid ${skin.secondary};
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;

const Profile = styled.img`
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    align-self: center;
`;

const BlockList = styled.div`
    margin-bottom: 1.5rem;
    height: 335px;
    overflow: auto;
    margin-top: auto;
`;

const Block = styled.div`
    font-weight: 300;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    padding: 0.5rem 0 0;
    color: ${contrast.middleHigh};
    & + & {
        border-top: 1px solid ${contrast.middleLow};
    }
    i {
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        display: block;
        letter-spacing: 0.05rem;
        color: ${skin.secondary};
    }
    span {
        display: block;
        & + span {
            padding-top: 0.5rem;
        }
    }
`;

const Name = styled.h3`
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    ${StyledButton} {
        flex: 1;
    }
`;

const Card: FC<ICharacter> = ({
    image,
    name,
    status,
    species,
    gender,
    origin,
    location,
    episode,
}) => {
    const [cardStatus, setCardStatus] = useState<'info' | 'episodes'>('info');

    return (
        <StyledCard>
            <Profile src={image} alt={name} />
            <Name>{name}</Name>
            <BlockList>
                {cardStatus === 'info' ? (
                    <>
                        <Block>
                            <i>Info</i>
                            <span>Status: {status}</span>
                            <span>Species: {species}</span>
                            <span>Gender: {gender}</span>
                        </Block>
                        <Block>
                            <i>Origin</i>
                            <span>Name: {origin.name}</span>
                            <span>Dimension: {origin.dimension}</span>
                            <span>Residents: {origin.residents.length}</span>
                        </Block>
                        <Block>
                            <i>Location</i>
                            <span>Name: {location.name}</span>
                            <span>Dimension: {location.dimension}</span>
                            <span>Residents: {location.residents.length}</span>
                        </Block>
                    </>
                ) : (
                    <Block>
                        <i>Episodes</i>
                        {episode.map((el) => (
                            <span key={el.id}>
                                {el.id} - {el.name}
                            </span>
                        ))}
                    </Block>
                )}
            </BlockList>
            <ButtonGroup>
                <Button
                    variant={cardStatus === 'info' ? 'solid' : 'outline'}
                    interactive={cardStatus !== 'info'}
                    onClick={() => {
                        setCardStatus('info');
                    }}
                >
                    Info
                </Button>
                <Button
                    variant={cardStatus === 'episodes' ? 'solid' : 'outline'}
                    interactive={cardStatus !== 'episodes'}
                    onClick={() => {
                        setCardStatus('episodes');
                    }}
                >
                    Episodes
                </Button>
            </ButtonGroup>
        </StyledCard>
    );
};

export default Card;
