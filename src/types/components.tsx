import { ReactNode } from 'react';
import { ICharacter } from './data';

export type IChildren = {
    children?: ReactNode;
};

export type IPagination = {
    totalPages: number;
    currentPage: number;
    siblingCount?: number;
    onChange: (page: number) => void;
};

export type IButton = {
    children: ReactNode;
    variant?: 'solid' | 'outline';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    interactive?: boolean;
};

export type ICardGrid = {
    characters: ICharacter[];
};
