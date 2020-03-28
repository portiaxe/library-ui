export interface Book {
    id: string;
    title: string;
    author: string;
    publisher: string;
    code: string;
    available: boolean;
}

export interface Borrower {
    id: string;
    number: string;
    name: string;
}

export interface User {
    username: string;
    password: string;
}
