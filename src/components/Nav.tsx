import { Navbar, Text } from '@nextui-org/react';

export default function Nav() {
    return (
        <Navbar variant="sticky">
            <Navbar.Brand>
                <Text b hideIn="xs" h1 size={20} color="primary" css={{ m: 0 }}>
                    Rick and Morty Profiles
                </Text>
            </Navbar.Brand>
        </Navbar>
    );
}
