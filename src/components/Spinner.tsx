import styled, { keyframes } from 'styled-components';
import { skin } from '../assets/colors';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    animation: ${rotate360} 0.75s linear infinite;
    border-top: 2px solid ${skin.secondaryDark};
    border-right: 2px solid ${skin.secondaryDark};
    border-bottom: 2px solid ${skin.secondaryDark};
    border-left: 2px solid ${skin.secondary};
    background: transparent;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`;

export default Spinner;
