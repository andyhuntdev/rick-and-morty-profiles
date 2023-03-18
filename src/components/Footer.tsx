import { Container, Text } from '@nextui-org/react';

export default function Footer() {
    return (
        <footer>
            <Container>
                <hr/>
                <Text color="primary" css={{py: '1rem'}}>Almost before we knew it, we had left the ground.</Text>
            </Container>
        </footer>
    );
}
