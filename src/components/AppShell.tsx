import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const StyledAppShell = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export default function AppShell() {
    return (
        <StyledAppShell>
            <Header />
            <Main />
            <Footer />
        </StyledAppShell>
    );
}
