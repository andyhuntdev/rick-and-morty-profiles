import styled from 'styled-components';
import { contrast, skin } from '../assets/colors';
import { github, logo } from '../assets/glyphs';

const StyledHeader = styled.header`
    padding: 2rem 2rem 1rem;
    color: ${contrast.high};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
`
const Headline = styled.a`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${contrast.high};
    display: flex;
    align-items: center;
    &:hover {
        color: ${contrast.high};
    }
    > svg {
        margin-right: 0.5rem;
        width: 32px;
        height: 32px;
        stroke: ${skin.secondary};
    }
`

const ProfileLink = styled.a`
    display: flex;
    align-items: center;
    > svg {
        margin-right: 0.3rem;
        width: 28px;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <Headline href="/">{logo} Rick and Morty</Headline>
            <ProfileLink href="#" target="_blank">
                {github} Github
            </ProfileLink>
        </StyledHeader>
    );
}
