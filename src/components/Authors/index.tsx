import React from 'react';
import styles from './Authors.module.css';
import Item from '../Author';
import Title from '../Title';
import { useAuthors } from '../../context';

function Authors() {
  const authors = useAuthors();

  return (
    <div className={styles.authors}>
      <Title text="Authors" />
      {authors.map((author) => (
        <Item key={author} text={author} />
      ))}
    </div>
  );
}

export default Authors;
