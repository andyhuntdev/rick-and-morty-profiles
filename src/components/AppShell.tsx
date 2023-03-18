import { IChildren } from '../types/components';
import { styled } from '@nextui-org/react';

const Box = styled('div', {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100vh',
});

export default function AppShell({ children }: IChildren) {
    return <Box>{children}</Box>;
}
