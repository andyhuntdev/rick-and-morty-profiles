import { createContext, ReactNode, useState, Dispatch, SetStateAction, FC } from 'react';
import { ICharacter } from '../types/data';

interface IProps {
    children: ReactNode,
}

interface IAppContext {
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    totalPages: number | null,
    setTotalPages: Dispatch<SetStateAction<number | null>>
    characters: ICharacter[][],
    setCharacters: Dispatch<SetStateAction<ICharacter[][]>>
}

export const AppContext = createContext<IAppContext>({
    currentPage: 1,
    setCurrentPage: () => {},
    totalPages: null,
    setTotalPages: () => {},
    characters: [],
    setCharacters: () => {},
});

export const AppContentProvider: FC<IProps> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const [characters, setCharacters] = useState<ICharacter[][]>([]);

    return (
        <AppContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                totalPages,
                setTotalPages,
                characters,
                setCharacters,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
