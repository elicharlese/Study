export default function About() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Empowering learners worldwide</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe that education should be accessible to everyone, everywhere. 
              Our platform connects students with expert instructors, providing high-quality 
              learning experiences.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">✓ Interactive courses taught by experts</li>
              <li className="flex items-center gap-2">✓ Personalized learning paths</li>
              <li className="flex items-center gap-2">✓ Real-time progress tracking</li>
              <li className="flex items-center gap-2">✓ Certificates upon completion</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div><p className="text-3xl font-bold text-blue-600">50K+</p><p className="text-gray-500">Students</p></div>
              <div><p className="text-3xl font-bold text-purple-600">200+</p><p className="text-gray-500">Courses</p></div>
              <div><p className="text-3xl font-bold text-green-600">50+</p><p className="text-gray-500">Instructors</p></div>
              <div><p className="text-3xl font-bold text-orange-600">95%</p><p className="text-gray-500">Satisfaction</p></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
