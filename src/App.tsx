import React from 'react';
import './assets/App.css';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';
import { data } from './data';

function App() {
    const { setTotalPages, totalPages, setCurrentPage, currentPage, setCharacters, characters } = useContext(AppContext);

    setTotalPages(data.info.pages);
    setCurrentPage(1);
    setCharacters(data.results);

    return (
        <div className="App">
            <div>total pages: {totalPages}</div>
            <hr/>
            {characters[currentPage - 1].map(character => (
              <div key={character.id}>
                <p>{character.name}</p>
              </div>
            ))}
        </div>
    );
}

export default App;
