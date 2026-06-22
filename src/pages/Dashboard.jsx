import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import StatCard from '../components/StatCard'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function Dashboard({ data, loading }) {
  // Sample data for demonstration
  const chartData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    marriages: [10500000, 10600000, 10700000, 10800000, 10900000, 9500000, 10200000, 10400000, 10600000],
    divorces: [125000, 132000, 140000, 148000, 156000, 165000, 173000, 182000, 191000],
  }

  const divorceRate = (
    (chartData.divorces[chartData.divorces.length - 1] / chartData.marriages[chartData.marriages.length - 1]) * 100
  ).toFixed(3)

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Marriage vs Divorce Trends (2015-2023)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const lineChartData = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Marriages (in millions)',
        data: chartData.marriages.map(v => v / 1000000),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'Divorces (in thousands)',
        data: chartData.divorces.map(v => v / 1000),
        borderColor: '#ec4899',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  }

  const divorceRateChartData = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Divorce Rate (%)',
        data: chartData.divorces.map((v, i) => ((v / chartData.marriages[i]) * 100).toFixed(3)),
        backgroundColor: '#fbbf24',
        borderColor: '#f59e0b',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Divorce Rate Dashboard</h1>
          <p className="text-gray-600">Comprehensive statistics on marriage and divorce trends in India</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Total Marriages (2023)"
            value="10.6M"
            change="+2.1%"
            icon="💍"
          />
          <StatCard
            title="Total Divorces (2023)"
            value="191K"
            change="+4.9%"
            icon="💔"
          />
          <StatCard
            title="Divorce Rate"
            value={`${divorceRate}%`}
            change="+0.32%"
            icon="📊"
          />
          <StatCard
            title="Divorce Rate Change"
            value="+52.8%"
            subtitle="Since 2015"
            icon="📈"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Trend Line Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>

          {/* Divorce Rate Bar Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Bar
              data={divorceRateChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Divorce Rate by Year (%)',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rising Trend</h3>
              <p className="text-gray-600">
                Divorce rates have shown a consistent upward trend over the past 9 years, increasing from 1.19% in 2015 to {divorceRate}% in 2023.
              </p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Significant Growth</h3>
              <p className="text-gray-600">
                The number of divorces has increased by 52.8% over the period, while marriages have remained relatively stable.
              </p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Variation</h3>
              <p className="text-gray-600">
                Divorce rates vary significantly across different states, with urban areas showing higher rates compared to rural regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
