import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <p className="text-sm">
              Divorce Rate Tracker provides comprehensive statistics and analysis of marriage and divorce trends in India.
            </p>
          </div>

          {/* Data Sources */}
          <div>
            <h3 className="text-white font-bold mb-4">Data Sources</h3>
            <ul className="text-sm space-y-2">
              <li>Ministry of Statistics & Programme Implementation</li>
              <li>National Portal of India</li>
              <li>Indian Bureau of Civil Registration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-sm">Email: info@divorcetracker.in</p>
            <p className="text-sm">GitHub: isaacmatthewalex-oss</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2026 Divorce Rate Tracker. All rights reserved. | Data is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
