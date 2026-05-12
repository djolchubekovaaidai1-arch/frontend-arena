import Sidebar from '../../widgets/Sidebar'
import Header from '../../widgets/Header'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white grid-bg flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}