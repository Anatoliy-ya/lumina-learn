export interface UserState {
  name: string;
  isAuthenticated: boolean;
}

export interface CourseState {
  id: number;
  name: string;
  nameTeacher: string;
  category: string;
  imgUrl: string;
  title: string;
  description: string;
  rating: number;
  countRating: number;
  price: number;
  isFree: boolean;
  isFavorite: boolean;
}
