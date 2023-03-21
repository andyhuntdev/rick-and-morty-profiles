import { FC } from 'react';
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
        margin: 1rem 0;
    }
`

const Footer:FC = () => {
    return (
        <StyledFooter>
            <hr/>
            <p>Wubba Lubba Dub Dub! - <a href="https://andreacaccia.com/" target="_blank" rel="noreferrer">@andyhuntdev</a></p>
        </StyledFooter>
    );
}

export default Footer;