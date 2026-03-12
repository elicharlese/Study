import Link from 'next/link';

const features = [
  {
    title: 'Interactive Learning',
    description: 'Engage with dynamic content and hands-on projects designed by industry experts.',
    icon: '📚',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and achievement badges.',
    icon: '📊',
  },
  {
    title: 'Community',
    description: 'Connect with fellow learners and experts in our vibrant community forums.',
    icon: '👥',
  },
  {
    title: 'Certification',
    description: 'Earn recognized certificates to showcase your skills to employers.',
    icon: '🏆',
  },
  {
    title: 'Pricing',
    description: 'Flexible pricing plans to suit individual learners and organizations.',
    icon: '💰',
    link: '/pricing',
  },
  {
    title: 'Mobile Learning',
    description: 'Learn on-the-go with our fully responsive mobile experience.',
    icon: '📱',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
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
                <Link href={feature.link} className="inline-block mt-4 text-blue-600 hover:underline">
                  View Pricing →
                </Link>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
