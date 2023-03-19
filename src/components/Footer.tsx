import Container from './Container';
import styled from 'styled-components';
import { contrast } from '../assets/colors';

const StyledFooter = styled.footer`
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    text-align: center;
    font-size: 0.75rem;
    > hr {
        border-color: ${contrast.middle};
    }
    > p {
        margin-top: 1rem;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <hr/>
            <p>Develop with ...</p>
        </StyledFooter>
    );
}
