import { IPagination } from '../types/components';
import Button, { StyledButton } from './Button';
import styled from 'styled-components';
import { fastNext, next, prev, fastPrev } from '../assets/glyphs';

const StyledPagination = styled.div`
    display: flex;
    gap: 0.25rem;
    ${StyledButton} {
        padding: 0;
        > svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;

export default function Pagination({ totalPages, currentPage, onChange }: IPagination) {
    const maxbuttonsToShow = 5;
    const renderPagebuttons = () => {
        const pagebuttons = [];
        const siblingCount = 3;

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
                <Button disabled={currentPage === 1} onClick={() => onChange(currentPage - 1)}>
                    {prev}
                </Button>
            );

            if (startPage > 1) {
                pagebuttons.unshift(
                    <Button onClick={() => onChange(startPage - 1)}>{fastPrev}</Button>
                );
            }

            pagebuttons.push(
                <Button
                    disabled={currentPage === totalPages}
                    onClick={() => onChange(currentPage + 1)}
                >
                    {next}
                </Button>
            );

            if (endPage < totalPages) {
                pagebuttons.push(<Button onClick={() => onChange(endPage + 1)}>{fastNext}</Button>);
            }
        }

        return pagebuttons;
    };

    return (
        <StyledPagination>
            <Button disabled={currentPage === 1} onClick={() => onChange(1)}>
                1
            </Button>

            {renderPagebuttons()}

            <Button disabled={currentPage === totalPages} onClick={() => onChange(totalPages)}>
                {totalPages}
            </Button>
        </StyledPagination>
    );
}
