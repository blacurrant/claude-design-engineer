import React from 'react';

const stats = [
  { label: 'Revenue', value: '$48,250', change: '+12%' },
  { label: 'Active users', value: '3,482', change: '+4%' },
  { label: 'Conversion', value: '3.2%', change: '-0.5%' },
  { label: 'Avg. session', value: '4m 12s', change: '+18%' },
];

const recent = [
  { id: 1, name: 'Acme Corp', amount: '$1,200', status: 'Paid' },
  { id: 2, name: 'Globex', amount: '$850', status: 'Pending' },
  { id: 3, name: 'Initech', amount: '$2,400', status: 'Paid' },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-60 bg-white border-r border-gray-200 p-6">
        <h2 className="font-bold text-lg mb-8">Acme Analytics</h2>
        <nav className="space-y-2">
          <a className="block px-3 py-2 rounded-md bg-gray-100 font-medium">Overview</a>
          <a className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-all">Customers</a>
          <a className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-all">Invoices</a>
          <a className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-all">Settings</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Export report
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-sm text-gray-500">{s.label}</p>
              <p className="text-2xl font-bold mt-2">{s.value}</p>
              <p className="text-sm text-green-600 mt-1">{s.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-semibold">Recent invoices</h2>
          </div>
          <table className="w-full">
            <tbody>
              {recent.map((r) => (
                <tr key={r.id} className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                  <td className="p-4">{r.name}</td>
                  <td className="p-4">{r.amount}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${r.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
