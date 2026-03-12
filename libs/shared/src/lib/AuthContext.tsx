import { createContext, useContext, useState, ReactNode } from 'react';
import { AppUser, UserRole } from '@shared/types/user';

interface AuthContextType {
  user: AppUser | null;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);

  const login = (role: UserRole) => {
    const mockUser: AppUser = {
      id: '1',
      name: role === 'student' ? 'John Student' : role === 'professor' ? 'Dr. Smith' : 'Admin User',
      email: role === 'student' ? 'student@example.com' : role === 'professor' ? 'professor@example.com' : 'admin@example.com',
      role,
      ...(role === 'student' ? {
        studentId: 'STU001',
        enrolledCourses: ['Math 101', 'Physics 201'],
        completedCourses: [],
        xp: 0,
        level: 1,
        achievements: [],
      } : role === 'professor' ? {
        department: 'Computer Science',
        courses: ['CS101', 'CS201'],
        ratings: 4.8,
        publications: [],
      } : {
        permissions: ['manage_users', 'manage_courses', 'view_analytics'],
      }),
    } as AppUser;
    setUser(mockUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
