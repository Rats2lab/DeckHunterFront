interface Author {
    id: string;
    nickname: string;
    link: string;
  };

export interface Product {
    id: string;
    author: Author;
    title: string;
    description: string;
    launchDate: Date;
    votes: number;
    country: string;
  }