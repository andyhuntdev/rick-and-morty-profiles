import { ReactNode } from 'react';
import styled from 'styled-components';
import { skin } from '../assets/colors';

interface ICard {
    children: ReactNode
}

const StyledCard = styled.div`
    border-radius: 1rem;
    border: 1px solid ${skin.secondary};
    padding: 2rem;
`;

export default function Card({ children }: ICard) {
    return <StyledCard>{children}</StyledCard>;
}
