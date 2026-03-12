const pricingTiers = [
  { name: 'Free', price: '$0', description: 'Perfect for getting started', features: ['Access to basic courses', 'Community forum', 'Limited progress tracking', 'Email support'], cta: 'Get Started', popular: false },
  { name: 'Pro', price: '$19', description: 'For serious learners', features: ['All Free features', 'Unlimited course access', 'Advanced analytics', 'Certificate of completion', 'Priority support', 'Downloadable resources'], cta: 'Start Free Trial', popular: true },
  { name: 'Enterprise', price: '$99', description: 'For organizations', features: ['All Pro features', 'Team management', 'Custom learning paths', 'API access', 'Dedicated account manager', 'SSO integration', 'Custom reporting'], cta: 'Contact Sales', popular: false },
]

export default function Pricing() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`bg-white rounded-lg shadow-lg p-8 flex flex-col ${tier.popular ? 'ring-2 ring-black transform scale-105' : ''}`}>
              {tier.popular && <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">MOST POPULAR</span>}
              <h2 className="text-2xl font-bold">{tier.name}</h2>
              <div className="my-4"><span className="text-4xl font-bold">{tier.price}</span><span className="text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">✓ {feature}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-md font-semibold ${tier.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
