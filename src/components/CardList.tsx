import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Grid, Card, Text, Avatar } from '@nextui-org/react';

export default function CardList() {
    const { characters } = useContext(AppContext);

    return (
        <Grid.Container gap={2}>
            {!!characters?.length &&
                characters.map((character) => (
                    <Grid xs={6} md={4} lg={3} key={character.id}>
                        <Card>
                            <Card.Header css={{flexDirection: 'column'}}>
                                <Avatar
                                    src={character.image}
                                    css={{ size: '10rem', mb: '1rem'}}
                                    zoomed
                                    color="primary"
                                    bordered
                                />
                                <Text b size={"1.5rem"} css={{textAlign: 'center'}}>{character.name}</Text>
                            </Card.Header>
                            <Card.Body>
                                
                            </Card.Body>
                        </Card>
                    </Grid>
                ))}
        </Grid.Container>
    );
}
