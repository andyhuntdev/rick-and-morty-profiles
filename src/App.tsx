import React, { useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';
import AppShell from './components/AppShell';
import Header from './components/Header';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import CardList from './components/CardGrid';
import Main from './components/Main';
import { fetchData } from './utility/fetchData';
import GlobalStyle from './assets/globalStyle';

function App() {
    const { currentPage, setCharacters, setTotalPages, totalPages, setCurrentPage } =
        useContext(AppContext);

    useEffect(() => {
        fetchData(
            `https://rickandmortyapi.com/api/character?page=${currentPage}`,
            (data) => {
                setCharacters(data?.results);
                setTotalPages(data?.info?.pages);
            },
            () => {
                alert();
            }
        );
    }, [currentPage]);

    return (
        <>
            <GlobalStyle />
            <AppShell>
                <Header />
                <Main>
                    {!!totalPages && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    )}
                    <CardList />
                    {!!totalPages && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    )}
                </Main>
                <Footer />
            </AppShell>
        </>
    );
}

export default App;
