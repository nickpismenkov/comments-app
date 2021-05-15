import React from 'react';
import styles from './Wrapper.module.css';
import Authors from '../Authors';
import Comments from '../Comments';

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Authors />
      <Comments />
    </div>
  );
}

export default Wrapper;
