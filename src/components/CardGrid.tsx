import styled from 'styled-components';
import Card from './Card';
import { breakpoints } from '../assets/constants';
import { ICharacter } from '../types/data';

interface ICardGrid {
    characters: ICharacter[],
}

const Grid = styled.div`
    padding: 1rem 2rem;
    display: grid;
    gap: 2rem;
    @media (min-width: ${breakpoints.md}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${breakpoints.lg}px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: ${breakpoints.xl}px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export default function CardGrid({characters}:ICardGrid) {
    return (
        <Grid>
            {!!characters?.length && characters.map((character) => <Card key={character.id} {...character}/>)}
        </Grid>
    );
}
