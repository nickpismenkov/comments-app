export interface CommentI {
    author: string;
    message: string;
    comments: CommentI[];
};