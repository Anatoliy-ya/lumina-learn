export interface UserInterface {
  name: string;
  isAuthenticated: boolean;
}

export interface CourseInterface {
  id: number;
  nameTeacher: string;
  courseName: string;
  category: string;
  imgUrl: string;
  title: string;
  description: string;
  rating: number;
  countRating: number;
  price: number;
  isFree: boolean;
  isFavorite: boolean;
  chapters: {
    [key: number]: string;
  };
}

export interface CourseInterfaceMini {
  id: number;
  nameTeacher: string;
  courseName: string;
  imgUrl: string;
  title: string;
  chapters: {
    [key: number]: string;
  };
}

export interface FeedbackInterface {
  id: number;
  userName: string;
  courseName: string;
  idCourse: number;
  text: string;
}
