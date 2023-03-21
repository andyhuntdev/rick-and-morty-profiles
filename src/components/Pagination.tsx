import { IPagination } from '../types/components';
import Button, { StyledButton } from './Button';
import styled from 'styled-components';
import { fastNext, next, prev, fastPrev } from '../assets/glyphs';
import { layer } from '../assets/colors';
import { FC } from 'react';

const StyledPagination = styled.div`
    width: 100%;
    display: flex;
    gap: 0.25rem;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    background-color: ${layer.high};
    backdrop-filter: blur(10px);
    ${StyledButton} {
        padding: 0;
        > svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;

const Pagination:FC<IPagination> = ({ totalPages, currentPage, onChange }) => {
    const maxbuttonsToShow = 3;
    const renderPagebuttons = () => {
        const pagebuttons = [];
        const siblingCount = 2;

        if (totalPages <= maxbuttonsToShow) {
            for (let page = 1; page <= totalPages; page++) {
                pagebuttons.push(
                    <Button
                        key={page}
                        interactive={page === currentPage ? false : true}
                        variant={`${page === currentPage ? 'solid' : 'outline'}`}
                        onClick={() => onChange(page)}
                    >
                        {page}
                    </Button>
                );
            }
        } else {
            let startPage = Math.max(1, currentPage - siblingCount);
            let endPage = Math.min(totalPages, currentPage + siblingCount);
            let buttonsToShow = endPage - startPage + 1;

            if (buttonsToShow < maxbuttonsToShow) {
                if (currentPage < totalPages / 2) {
                    endPage += maxbuttonsToShow - buttonsToShow;
                } else {
                    startPage -= maxbuttonsToShow - buttonsToShow;
                }
            }

            for (let page = startPage; page <= endPage; page++) {
                pagebuttons.push(
                    <Button
                        key={page}
                        interactive={page === currentPage ? false : true}
                        variant={`${page === currentPage ? 'solid' : 'outline'}`}
                        onClick={() => onChange(page)}
                    >
                        {page}
                    </Button>
                );
            }

            pagebuttons.unshift(
                <>
                    {currentPage !== 1 && (
                        <Button onClick={() => onChange(currentPage - 1)}>{prev}</Button>
                    )}
                </>
            );

            if (startPage > 1) {
                pagebuttons.unshift(
                    <Button onClick={() => onChange(startPage - 1)}>{fastPrev}</Button>
                );
            }

            pagebuttons.push(
                <>
                    {currentPage !== totalPages && (
                        <Button onClick={() => onChange(currentPage + 1)}>{next}</Button>
                    )}
                </>
            );

            if (endPage < totalPages) {
                pagebuttons.push(<Button onClick={() => onChange(endPage + 1)}>{fastNext}</Button>);
            }
        }

        return pagebuttons;
    };

    return (
        <StyledPagination>
            {currentPage > 4 && <Button onClick={() => onChange(1)}>1</Button>}

            {renderPagebuttons()}

            {currentPage < totalPages - 2 && (
                <Button disabled={currentPage === totalPages} onClick={() => onChange(totalPages)}>
                    {totalPages}
                </Button>
            )}
        </StyledPagination>
    );
}

export default Pagination;
