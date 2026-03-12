const courses = [
  { id: 'cs101', title: 'Introduction to Computer Science', description: 'Learn the fundamentals of programming.', category: 'Computer Science', level: 'Beginner', duration: '8 weeks', instructor: 'Dr. Smith', students: 1250 },
  { id: 'math201', title: 'Advanced Mathematics', description: 'Master calculus and linear algebra.', category: 'Mathematics', level: 'Advanced', duration: '12 weeks', instructor: 'Prof. Johnson', students: 850 },
  { id: 'phys101', title: 'Physics Fundamentals', description: 'Explore mechanics and thermodynamics.', category: 'Physics', level: 'Intermediate', duration: '10 weeks', instructor: 'Dr. Williams', students: 620 },
  { id: 'eng201', title: 'Professional Writing', description: 'Develop technical communication skills.', category: 'Language', level: 'Beginner', duration: '6 weeks', instructor: 'Prof. Davis', students: 980 },
  { id: 'chem101', title: 'General Chemistry', description: 'Understand atomic structure and reactions.', category: 'Chemistry', level: 'Beginner', duration: '10 weeks', instructor: 'Dr. Brown', students: 540 },
  { id: 'bio201', title: 'Molecular Biology', description: 'Study genes and cells.', category: 'Biology', level: 'Advanced', duration: '14 weeks', instructor: 'Prof. Miller', students: 420 },
]

export default function Courses() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Explore our comprehensive course catalog</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button className="px-4 py-2 bg-black text-white rounded-full">All</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">Computer Science</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">Mathematics</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">Physics</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-4xl">📚</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{course.category}</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{course.level}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>⏱ {course.duration}</span>
                  <span>👥 {course.students} students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
