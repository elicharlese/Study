import { Link } from 'react-router-dom'

const features = [
  { title: 'Interactive Learning', description: 'Engage with dynamic content and hands-on projects.', icon: '📚' },
  { title: 'Progress Tracking', description: 'Monitor your journey with detailed analytics.', icon: '📊' },
  { title: 'Community', description: 'Connect with fellow learners and experts.', icon: '👥' },
  { title: 'Certification', description: 'Earn recognized certificates.', icon: '🏆' },
  { title: 'Pricing', description: 'Flexible plans for learners and organizations.', icon: '💰', link: '/pricing' },
  { title: 'Mobile Learning', description: 'Learn on-the-go with mobile experience.', icon: '📱' },
]

export default function Features() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
          <p className="text-xl text-gray-600">Everything you need to succeed</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
              {feature.link && (
                <Link to={feature.link} className="inline-block mt-4 text-blue-600 hover:underline">
                  View Pricing →
                </Link>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
