export type User = {
  name: string;
  password: string;
  phoneNumber: number;
  profession: string;
  email: string;
};

export type AllUsers = User[];

export type Movie = {
  _id: string;
  director: string[];
  writers: string[];
  stars: string[];
  releasedDate: number;
  productionCompany: string[];
  title: string;
  language: string;
  runTime: number | null;
  genre: string;
  voted: Voted[];
  poster: string;
  pageViews: number;
  description: string;
  upVoted: string[];
  downVoted: string[];
  totalVoted: number;
  voting: number;
};

export type Voted = {
  upVoted: string[];
  downVoted: string[];
  _id: string;
  updatedAt: number;
  genre: string;
};
