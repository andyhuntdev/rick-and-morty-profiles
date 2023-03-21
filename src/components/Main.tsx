import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { FC, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Pagination from './Pagination';
import CardGrid from './CardGrid';
import Spinner from './Spinner';
import { CHARACTERS_QUERY } from '../apollo/queries';

const StyledMain = styled.main`
    min-height: calc(100vh - 150px);
    width: 100%;
`;

const Box = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 300px);
`;

const Main: FC = () => {
    const { currentPage, totalPages, setCurrentPage, setTotalPages, setCharacters, characters } =
        useContext(AppContext);
    const { loading, error, data } = useQuery(CHARACTERS_QUERY, {
        variables: { currentPage },
    });

    useEffect(() => {
        if (!!data) {
            setTotalPages(data?.characters?.info?.pages);
            setCharacters(data?.characters?.results);
        }
    }, [data, setTotalPages, setCharacters]);

    return (
        <StyledMain>
            {error && <p>Error!</p>}
            {!!totalPages && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onChange={(page) => setCurrentPage(page)}
                />
            )}
            {loading && (
                <Box>
                    <Spinner />
                </Box>
            )}
            {!!characters?.length && !loading && <CardGrid characters={characters} />}
        </StyledMain>
    );
};

export default Main;
