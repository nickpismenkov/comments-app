import React, { useState } from 'react';
import styles from './App.module.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import { selectedAuthorContext } from './context';

function App() {
  const [author, setAuthor] = useState<string | null>(null);

  return (
    <div className={styles.flex}>
      <selectedAuthorContext.Provider
        value={{
          author,
          changeSelectedAuthor: (name: string) => setAuthor(name),
        }}
      >
        <Header />
        <Wrapper />
      </selectedAuthorContext.Provider>
    </div>
  );
}

export default App;
