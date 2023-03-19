import { IChildren } from '../types/components';
import styled from 'styled-components'

const StyledAppShell = styled.div`
    width: 100%;
    min-height: calc(100vh - 90px);
    padding-top: 90px;
`

export default function AppShell({ children }: IChildren) {
    return <StyledAppShell>{children}</StyledAppShell>;
}
