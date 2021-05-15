import React from 'react';
import styles from './Comments.module.css';
import Comment from '../Comment';
import Title from '../Title';
import { useComments } from '../../context';
import { CommentI } from '../../store/comments.model';

type CommentT = {
  comments: CommentI[];
};

const RenderComments: React.FC<CommentT> = ({ comments }) => {
  return (
    <div className={styles.childrenComments}>
      {comments.map(({ author, message, comments }, index) => (
        <div key={index}>
          <Comment
            key={`${index}/${message}`}
            comment={message}
            commentAuthor={author}
          />
          {comments.length > 0 && (
            <RenderComments key={`${message}/${index}`} comments={comments} />
          )}
        </div>
      ))}
    </div>
  );
};

function Comments() {
  const comments = useComments();

  return (
    <div className={styles.comments}>
      <Title text="Comments" />
      {comments.map(({ message, comments, author }, index) => (
        <div key={`${index}/${message}`} className={styles.parentComment}>
          <Comment comment={message} commentAuthor={author} />
          {comments.length > 0 && (
            <RenderComments key={`${message}/${index}`} comments={comments} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Comments;
