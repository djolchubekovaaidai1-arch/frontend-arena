import XPBar from '../XPBar'
import { FaBars } from 'react-icons/fa'
import HackerTerminal from '../../widgets/HackerTerminal'

export default function Header({ onMenuOpen }) {
  return (
    <header className="
      border-b
      border-[#1f1f1f]
      px-4
      md:px-8
      py-5
      bg-[#0d0d0d]
    ">
      <div className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-5
      ">
        <button
          onClick={onMenuOpen}
          className="
    md:hidden
    text-2xl
    text-cyan-400
  "
        >
          <FaBars />
        </button>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Welcome Back
          </h2>

          <p className="text-gray-400 mt-1 text-sm md:text-base">
            Ready to level up your frontend skills?
          </p>
        </div>

        <XPBar />
      </div>
      <div className="mt-14">
        <h2 className="text-3xl font-bold mb-6">
          System Terminal
        </h2>

        <HackerTerminal />
      </div>
    </header>
  )
}