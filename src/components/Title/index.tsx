import React from 'react';
import styles from './Title.module.css';

interface TitleI {
  text: string;
}

function Title({ text }: TitleI) {
  return <div className={styles.title}>{text}</div>;
}

export default Title;
