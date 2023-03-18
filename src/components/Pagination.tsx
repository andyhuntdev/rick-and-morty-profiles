import { Pagination as NextUiPagination } from '@nextui-org/react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { styled } from '@nextui-org/react';

const Box = styled('div', {
    minHeight: '4rem',
    display: 'flex',
    alignItems: 'center',
});

export default function Pagination() {
    const { totalPages, setCurrentPage, currentPage } = useContext(AppContext);

    return (
        <Box>
            {!!totalPages && (
                <NextUiPagination
                    rounded
                    total={totalPages}
                    page={currentPage}
                    onChange={(page) => {
                        setCurrentPage(page);
                    }}
                />
            )}
        </Box>
    );
}
