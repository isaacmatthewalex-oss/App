# Setup & Development Guide

## Project Overview

**Divorce Rate Tracker** is a full-stack web application that provides comprehensive statistics and analysis of marriage and divorce rates in India. The application features interactive dashboards, state-wise comparisons, and detailed reports.

## Quick Start

### Prerequisites
- Node.js v14+ ([Download](https://nodejs.org/))
- npm or yarn
- Git

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/isaacmatthewalex-oss/App.git
cd App

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
App/
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .env.example            # Environment variables template
│
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main App component
│   │
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Footer component
│   │   └── StatCard.jsx    # Statistics card component
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx   # Main dashboard with charts
│   │   ├── StateAnalysis.jsx  # State-wise analysis
│   │   └── Reports.jsx     # Reports and data analysis
│   │
│   └── styles/
│       └── index.css       # Global styles with Tailwind
│
├── backend/
│   └── server.js           # Express server with API endpoints
│
├── data/                   # Data files (to be added)
├── public/                 # Static assets
│
└── README.md               # Project documentation
```

## Running the Application

### Development Mode

```bash
# Terminal 1: Start frontend development server
npm run dev

# Terminal 2: Start backend server (in another terminal)
npm run server
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Build

```bash
# Build frontend
npm run build

# Start production server
npm start
```

## Features

### 1. Dashboard
- Visualize marriage and divorce trends (2015-2023)
- View key statistics and metrics
- Interactive charts using Chart.js
- Year-over-year comparisons

### 2. State Analysis
- Compare divorce rates across Indian states
- View state-specific statistics
- Interactive state selection
- Comparison tables

### 3. Reports
- Generate annual reports
- Regional analysis
- Demographic studies
- Long-term trend analysis
- Download reports as PDF

## API Endpoints

### Backend API (Express)

```
GET /api/health                    # Health check
GET /api/statistics               # Get overall statistics
GET /api/states                   # Get state-wise data
GET /api/trends                   # Get historical trends
```

### Sample API Response

```json
{
  "success": true,
  "data": {
    "totalMarriages": 10600000,
    "totalDivorces": 191000,
    "divorceRate": 1.802,
    "yearOverYearChange": 4.9,
    "period": "2023"
  }
}
```

## Technology Stack

### Frontend
- **React** 18.2.0 - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Data visualization
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (optional)
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Auto-reload server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/divorce-tracker

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend Configuration
VITE_API_URL=http://localhost:5000/api

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## NPM Scripts

```bash
npm run dev          # Start development server (frontend)
npm run build        # Build for production
npm run preview      # Preview production build
npm run server       # Start backend server
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
```

## Data Sources

- Ministry of Statistics & Programme Implementation (MoSPI)
- National Portal of India
- Indian Bureau of Civil Registration

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Standards

- Use functional components with React Hooks
- Follow ES6+ standards
- Use Tailwind CSS for styling
- Keep components focused and reusable
- Add meaningful comments for complex logic
- Write descriptive commit messages

## Performance Tips

- Use React.memo() for expensive components
- Implement lazy loading for routes
- Optimize images and assets
- Use production builds for deployment

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
- Ensure backend is running on correct port
- Check `.env` CORS_ORIGIN configuration
- Verify API URL in frontend configuration

## Deployment

### Vercel (Frontend)
```bash
npm i -g vercel
vercel
```

### Heroku (Backend)
```bash
heroku create your-app-name
git push heroku main
```

## License

MIT License - see LICENSE file for details

## Support & Contact

For questions or issues:
- GitHub Issues: https://github.com/isaacmatthewalex-oss/App/issues
- Email: isaacmatthewalex@gmail.com

---

**Last Updated**: June 22, 2026
**Version**: 1.0.0
