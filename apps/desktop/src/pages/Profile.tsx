import { useAuth } from '../context/AuthContext'

export default function ProfilePage() {
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please log in to view your profile.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 capitalize">{user.role}</p>
            </div>
          </div>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {user.role === 'student' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Student Dashboard</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Level</p>
                <p className="text-2xl font-bold text-blue-600">{user.level}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">XP</p>
                <p className="text-2xl font-bold text-green-600">{user.xp}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600 mb-2">Enrolled Courses</p>
                <div className="flex flex-wrap gap-2">
                  {user.enrolledCourses.map(course => (
                    <span key={course} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {user.role === 'professor' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Professor Dashboard</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Department</p>
                <p className="text-lg font-semibold text-purple-600">{user.department}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Rating</p>
                <p className="text-2xl font-bold text-yellow-600">{user.ratings} ★</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600 mb-2">Courses</p>
                <div className="flex flex-wrap gap-2">
                  {user.courses.map(course => (
                    <span key={course} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {user.role === 'admin' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Admin Dashboard</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Permissions</p>
                <div className="flex flex-wrap gap-2">
                  {user.permissions.map(perm => (
                    <span key={perm} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                      {perm}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <button className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 text-center">
                  Manage Users
                </button>
                <button className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 text-center">
                  Manage Courses
                </button>
                <button className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 text-center">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
