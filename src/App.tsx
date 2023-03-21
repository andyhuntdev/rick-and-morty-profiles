import AppShell from './components/AppShell';
import GlobalStyle from './assets/globalStyle';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { AppContextProvider } from './context/AppContext';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <AppContextProvider>
                <GlobalStyle />
                <AppShell/>
            </AppContextProvider>
        </ApolloProvider>
    );
}

export default App;
