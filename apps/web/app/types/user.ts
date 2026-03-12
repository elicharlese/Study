export type UserRole = 'student' | 'professor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Student extends User {
  role: 'student';
  studentId: string;
  enrolledCourses: string[];
  completedCourses: string[];
  xp: number;
  level: number;
  achievements: string[];
}

export interface Professor extends User {
  role: 'professor';
  department: string;
  courses: string[];
  ratings: number;
  publications: string[];
}

export interface Admin extends User {
  role: 'admin';
  permissions: string[];
}

export type AppUser = Student | Professor | Admin;
