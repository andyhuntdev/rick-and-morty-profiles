import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { FC } from 'react';

const StyledAppShell = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const AppShell: FC = () => {
    return (
        <StyledAppShell>
            <Header />
            <Main />
            <Footer />
        </StyledAppShell>
    );
};

export default AppShell;
