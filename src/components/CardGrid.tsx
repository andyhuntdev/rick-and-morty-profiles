import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components';
import Card from './Card';

const Grid = styled.div`
    padding: 2rem 0;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
`

export default function CardGrid() {
    const { characters } = useContext(AppContext);

    return (
        <Grid>
            {!!characters?.length && characters.map((character) => <Card>{character.name}</Card>)}
        </Grid>
    );
}
