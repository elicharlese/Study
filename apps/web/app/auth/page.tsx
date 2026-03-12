'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { UserRole } from '@/app/types/user';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(selectedRole);
    router.push('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center w-full max-w-md">
        <h1 className="text-3xl font-bold">Sign In</h1>
        
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          {(['student', 'professor', 'admin'] as UserRole[]).map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-md capitalize transition-colors ${
                selectedRole === role
                  ? 'bg-white shadow-md text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="p-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </button>
        </form>
      </main>
    </div>
  );
}
