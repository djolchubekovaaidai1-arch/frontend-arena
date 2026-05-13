import { useState } from 'react'

import Sidebar from '../../widgets/Sidebar'
import Header from '../../widgets/Header'
import MobileSidebar from '../../widgets/MobileSidebar'
import ParticlesBackground from '../../shared/ui/ParticlesBackground'

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white grid-bg flex relative">

      <ParticlesBackground />

      <Sidebar />

      <MobileSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col min-h-screen relative z-10">

        <Header
          onMenuOpen={() => setIsMenuOpen(true)}
        />

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  )
}