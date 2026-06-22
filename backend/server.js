import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())

// Sample data routes
app.get('/api/statistics', (req, res) => {
  res.json({
    success: true,
    data: {
      totalMarriages: 10600000,
      totalDivorces: 191000,
      divorceRate: 1.802,
      yearOverYearChange: 4.9,
      period: '2023'
    }
  })
})

app.get('/api/states', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 'maharashtra',
        name: 'Maharashtra',
        marriages: 650000,
        divorces: 12500,
        divorceRate: 1.92
      },
      {
        id: 'karnataka',
        name: 'Karnataka',
        marriages: 520000,
        divorces: 8900,
        divorceRate: 1.71
      },
      // Add more states as needed
    ]
  })
})

app.get('/api/trends', (req, res) => {
  res.json({
    success: true,
    data: {
      years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      marriages: [10500000, 10600000, 10700000, 10800000, 10900000, 9500000, 10200000, 10400000, 10600000],
      divorces: [125000, 132000, 140000, 148000, 156000, 165000, 173000, 182000, 191000],
    }
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
  console.log(`📊 API available at http://localhost:${PORT}/api`)
})
