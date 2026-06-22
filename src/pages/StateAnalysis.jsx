import React, { useState } from 'react'

function StateAnalysis({ data, loading }) {
  const [selectedState, setSelectedState] = useState('maharashtra')

  // Sample data for Indian states
  const statesData = [
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      marriages: 650000,
      divorces: 12500,
      divorceRate: 1.92,
      population: 125214000,
    },
    {
      id: 'karnataka',
      name: 'Karnataka',
      marriages: 520000,
      divorces: 8900,
      divorceRate: 1.71,
      population: 67562000,
    },
    {
      id: 'uttar-pradesh',
      name: 'Uttar Pradesh',
      marriages: 1200000,
      divorces: 15800,
      divorceRate: 1.32,
      population: 199812000,
    },
    {
      id: 'delhi',
      name: 'Delhi',
      marriages: 180000,
      divorces: 4200,
      divorceRate: 2.33,
      population: 16753235,
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      marriages: 420000,
      divorces: 5600,
      divorceRate: 1.33,
      population: 72147000,
    },
    {
      id: 'west-bengal',
      name: 'West Bengal',
      marriages: 380000,
      divorces: 4200,
      divorceRate: 1.11,
      population: 91276115,
    },
  ]

  const currentState = statesData.find(s => s.id === selectedState)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">State-wise Analysis</h1>
          <p className="text-gray-600">Compare divorce rates across Indian states</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* State List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Select State</h2>
              <div className="space-y-2">
                {statesData.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => setSelectedState(state.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      selectedState === state.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-semibold">{state.name}</div>
                    <div className="text-sm opacity-75">{state.divorceRate.toFixed(2)}% divorce rate</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* State Details */}
          {currentState && (
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentState.name}</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Marriages</p>
                    <p className="text-2xl font-bold text-indigo-600">
                      {(currentState.marriages / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Divorces</p>
                    <p className="text-2xl font-bold text-pink-600">
                      {(currentState.divorces / 1000).toFixed(1)}K
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Divorce Rate</p>
                    <p className="text-2xl font-bold text-yellow-600">{currentState.divorceRate.toFixed(2)}%</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Population</p>
                    <p className="text-2xl font-bold text-green-600">
                      {(currentState.population / 1000000).toFixed(1)}M
                    </p>
                  </div>
                </div>

                {/* Analysis */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Divorce Rate Comparison</h3>
                    <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-sm font-semibold"
                        style={{ width: `${(currentState.divorceRate / 2.5) * 100}%` }}
                      >
                        {currentState.divorceRate.toFixed(2)}%
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">National Average: ~1.8%</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Marriage to Divorce Ratio</h3>
                    <p className="text-gray-600">
                      For every {Math.round(currentState.marriages / currentState.divorces)} marriages, there is 1 divorce
                    </p>
                  </div>
                </div>
              </div>

              {/* Trends */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
                <h3 className="font-bold text-gray-900 mb-3">📊 Key Statistics</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ State has {currentState.divorceRate > 1.8 ? 'higher' : 'lower'} than national average divorce rate</li>
                  <li>✓ Population represents {((currentState.population / 1400000000) * 100).toFixed(2)}% of India's total</li>
                  <li>✓ Urbanization and education levels influence divorce rates</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">All States Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">State</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Marriages</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Divorces</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Divorce Rate</th>
                </tr>
              </thead>
              <tbody>
                {statesData.map((state, index) => (
                  <tr key={state.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{state.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{(state.marriages / 1000).toFixed(0)}K</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{(state.divorces / 1000).toFixed(1)}K</td>
                    <td className="px-6 py-4 text-sm font-semibold">
                      <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                        {state.divorceRate.toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateAnalysis
