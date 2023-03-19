import { IChildren } from "../types/components";
import styled from 'styled-components';

const StyledMain = styled.main`
    padding-left: 2rem;
    padding-right: 2rem;
`

export default function Main({children}:IChildren) {
    return <StyledMain>{children}</StyledMain>
}