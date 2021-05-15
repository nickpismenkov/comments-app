import React from 'react';
import styles from './Author.module.css';
import { useSelectedAuthor } from '../../context';

interface AuthorI {
  text: string;
}

function Author({ text }: AuthorI) {
  const { author, changeSelectedAuthor } = useSelectedAuthor();
  const isSelectedAuthor: boolean = author === text;

  return (
    <div
      className={isSelectedAuthor ? styles.selectedAuthor : styles.author}
      onClick={() => changeSelectedAuthor(text)}
    >
      {text}
    </div>
  );
}

export default Author;
