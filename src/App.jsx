import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import StateAnalysis from './pages/StateAnalysis'
import Reports from './pages/Reports'
import Footer from './components/Footer'
import './styles/index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fetch initial data
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/statistics')
      if (response.ok) {
        const result = await response.json()
        setData(result)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard data={data} loading={loading} />
      case 'state-analysis':
        return <StateAnalysis data={data} loading={loading} />
      case 'reports':
        return <Reports data={data} loading={loading} />
      default:
        return <Dashboard data={data} loading={loading} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
