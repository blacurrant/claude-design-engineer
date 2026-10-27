import React from 'react';

const features = [
  { title: 'Smart tasks', desc: 'Tasks organize themselves based on priority and deadlines.' },
  { title: 'Team sync', desc: 'Everyone sees the same updates in real time.' },
  { title: 'Focus mode', desc: 'Block distractions and get into deep work faster.' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <span className="text-xl font-bold text-indigo-600">Flowly</span>
        <nav className="space-x-6 text-gray-600">
          <a className="hover:text-gray-900 transition-all">Features</a>
          <a className="hover:text-gray-900 transition-all">Pricing</a>
          <a className="hover:text-gray-900 transition-all">Blog</a>
        </nav>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all">
          Get started
        </button>
      </header>

      <section className="text-center py-24 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
          Get more done with less effort
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Flowly is the productivity app that keeps your team focused on what matters.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300">
            Start free trial
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-xl text-lg hover:bg-gray-50 transition-all duration-300">
            Watch demo
          </button>
        </div>
      </section>

      <section className="py-20 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-3 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-100">
        © 2026 Flowly. All rights reserved.
      </footer>
    </div>
  );
}
