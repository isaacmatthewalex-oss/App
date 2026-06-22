import React, { useState } from 'react'

function Reports({ data, loading }) {
  const [reportType, setReportType] = useState('annual')
  const [selectedYear, setSelectedYear] = useState('2023')

  const reportTypes = [
    { id: 'annual', label: 'Annual Report', icon: '📅' },
    { id: 'regional', label: 'Regional Analysis', icon: '🗺️' },
    { id: 'demographic', label: 'Demographic Study', icon: '👥' },
    { id: 'trends', label: 'Trend Analysis', icon: '📈' },
  ]

  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']

  const renderReport = () => {
    switch (reportType) {
      case 'annual':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Report {selectedYear}</h3>
              <p className="text-gray-700 mb-4">
                This comprehensive annual report provides detailed statistics on marriages and divorces across India for the year {selectedYear}.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Total Marriages</p>
                  <p className="text-2xl font-bold text-indigo-600">10.6M</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total Divorces</p>
                  <p className="text-2xl font-bold text-pink-600">191K</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-gray-900 mb-4">📊 Executive Summary</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Marriage rate remained stable compared to previous year</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Divorce cases increased by 4.9% year-over-year</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Urban areas show significantly higher divorce rates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Education and economic independence are key factors</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              📥 Download Full Report (PDF)
            </button>
          </div>
        )

      case 'regional':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regional Analysis</h3>
              <p className="text-gray-700 mb-6">
                Detailed regional breakdown showing variations in divorce rates across different parts of India.
              </p>

              <div className="space-y-4">
                {[
                  { region: 'Northern India', rate: 1.45, states: 5 },
                  { region: 'Southern India', rate: 1.62, states: 5 },
                  { region: 'Eastern India', rate: 1.28, states: 4 },
                  { region: 'Western India', rate: 1.88, states: 4 },
                  { region: 'Central India', rate: 1.35, states: 5 },
                ].map((item) => (
                  <div key={item.region} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.region}</h4>
                        <p className="text-sm text-gray-600">{item.states} States/UTs</p>
                      </div>
                      <span className="text-lg font-bold text-indigo-600">{item.rate}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600"
                        style={{ width: `${item.rate * 30}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'demographic':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Demographic Study</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Age Group Analysis</h4>
                  <p className="text-gray-700 text-sm">Highest divorce rates observed in 30-45 age group</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Education Impact</h4>
                  <p className="text-gray-700 text-sm">Higher education correlates with increased divorce rates</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Economic Status</h4>
                  <p className="text-gray-700 text-sm">Urban and economically developed areas show higher rates</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Gender Distribution</h4>
                  <p className="text-gray-700 text-sm">Increasing cases filed by both men and women</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'trends':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Trends (2015-2023)</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">📈 Overall Trend</h4>
                  <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      Consistent upward trend in divorce rates with 52.8% growth over 9 years.
                      Average annual increase: ~5.9%
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🔍 Key Observations</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• 2020: Slight dip due to COVID-19 lockdown effects</li>
                    <li className="text-gray-700">• Strong recovery from 2021-2023</li>
                    <li className="text-gray-700">• Urban centers lead the trend</li>
                    <li className="text-gray-700">• Gradual rural adoption of legal divorce processes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🎯 Future Projection</h4>
                  <p className="text-gray-700">
                    Based on current trends, divorce rates are expected to continue rising, reaching approximately 2.2-2.5% by 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Reports & Analysis</h1>
          <p className="text-gray-600">Generate and download comprehensive reports on divorce statistics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {reportTypes.map((report) => (
            <button
              key={report.id}
              onClick={() => setReportType(report.id)}
              className={`p-4 rounded-lg transition text-left ${
                reportType === report.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-900 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-2xl mb-2 block">{report.icon}</span>
              <span className="font-semibold">{report.label}</span>
            </button>
          ))}
        </div>

        {/* Year Selection (for annual reports) */}
        {reportType === 'annual' && (
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <label className="block text-sm font-semibold text-gray-900 mb-4">Select Year</label>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedYear === year
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Report Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {renderReport()}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 border-l-4 border-indigo-600">
            <h3 className="text-lg font-bold text-gray-900 mb-2">📚 Research Papers</h3>
            <p className="text-gray-700 text-sm">Access academic research on divorce trends in India</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 border-l-4 border-pink-600">
            <h3 className="text-lg font-bold text-gray-900 mb-2">📊 Data Sets</h3>
            <p className="text-gray-700 text-sm">Download raw data for your own analysis</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border-l-4 border-yellow-600">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🎯 Statistics</h3>
            <p className="text-gray-700 text-sm">Quick reference statistics and key metrics</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
