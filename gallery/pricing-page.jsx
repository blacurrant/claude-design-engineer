import React, { useState } from 'react';

const plans = [
  { name: 'Starter', price: 9, features: ['5 projects', '10 GB storage', 'Email support'] },
  { name: 'Pro', price: 29, features: ['Unlimited projects', '100 GB storage', 'Priority support', 'Team members'] },
  { name: 'Enterprise', price: 99, features: ['Everything in Pro', 'SSO', 'Dedicated manager', 'SLA'] },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">Simple, transparent pricing</h1>
        <p className="mt-3 text-gray-600">Choose the plan that fits your team.</p>

        <div className="mt-8 inline-flex items-center gap-3 border border-gray-200 rounded-full p-1 bg-white">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-sm ${!annual ? 'bg-gray-900 text-white' : 'text-gray-600'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-sm ${annual ? 'bg-gray-900 text-white' : 'text-gray-600'}`}
          >
            Annual (save 20%)
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
              <p className="mt-4 text-4xl font-bold text-gray-900">
                ${annual ? Math.round(plan.price * 0.8) : plan.price}
                <span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="text-gray-700 text-sm">✓ {f}</li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
