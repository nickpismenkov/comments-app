import React from 'react';
import styles from './Comment.module.css';
import { useSelectedAuthor } from '../../context';

interface CommentI {
  commentAuthor: string;
  comment: string;
}

function Comment({ commentAuthor, comment }: CommentI) {
  const { author } = useSelectedAuthor();
  const isSelectedAuthor: boolean = author === commentAuthor;

  return (
    <div className={isSelectedAuthor ? styles.selectedComment : styles.comment}>
      {comment}
    </div>
  );
}

export default Comment;
