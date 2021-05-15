import React from 'react';
import { comments } from '../store';
import { CommentI } from '../store/comments.model';

const allAuthors = ((comments: CommentI[]) => {
    const authors: string[] = [];

    const getAuthor = (comments: CommentI[]) => comments.forEach(comment => {
        const { comments, author } = comment;

        if (comments.length > 0) getAuthor(comments);
        if (!authors.includes(author)) authors.push(author);
    });

    getAuthor(comments);

    return authors;
})(comments);

type SelectedAuthorContextT = {
    author: string | null,
    changeSelectedAuthor: (name: string) => void;
}
const selectedAuthorContext = React.createContext<SelectedAuthorContextT>({
    author: null,
    changeSelectedAuthor: (name: string) => { },
});

const commentsContext = React.createContext<CommentI[]>(comments);
const authorsContext = React.createContext<string[]>(allAuthors);

const useComments = () => {
    return React.useContext<CommentI[]>(commentsContext);
};
const useAuthors = () => {
    return React.useContext<string[]>(authorsContext);
};
const useSelectedAuthor = () => {
    return React.useContext<SelectedAuthorContextT>(selectedAuthorContext);
};

export { useComments, useAuthors, useSelectedAuthor, selectedAuthorContext };