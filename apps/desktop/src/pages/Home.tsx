import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-7xl mx-auto">
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">Welcome to LearnPlatform</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Master new skills with expert-led courses. Join thousands of learners advancing their careers.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/courses" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              Browse Courses
            </Link>
            <Link to="/pricing" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200">
              View Pricing
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
            <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-600">Custom paths tailored to your goals and schedule.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Earn Certificates</h3>
            <p className="text-gray-600">Get recognized credentials upon course completion.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
