import React, { useEffect } from 'react';
import './assets/App.css';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';
import { NextUIProvider, Container } from '@nextui-org/react';
import AppShell from './components/AppShell';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import CardList from './components/CardList';

function App() {
    const { currentPage, setCharacters, characters, totalPages, setTotalPages, setCurrentPage } =
        useContext(AppContext);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setCharacters(actualData?.results);
                setTotalPages(actualData?.info?.pages);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [currentPage]);

    return (
        <NextUIProvider>
            <AppShell>
                <Nav />

                <main>
                    <Container>
                        <Pagination />
                        <CardList />
                        <Pagination />
                    </Container>
                </main>
                <Footer />
            </AppShell>
        </NextUIProvider>
    );
}

export default App;
