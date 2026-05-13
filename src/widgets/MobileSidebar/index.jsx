import { NavLink } from 'react-router-dom'

import {
  FaTimes,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaUser,
  FaMedal,
  FaHome,
} from 'react-icons/fa'

export default function MobileSidebar({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null

  const navItem =
    'flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-[#1a1a1a] hover:text-cyan-400'

  return (
    <div className="
      fixed
      inset-0
      bg-black/70
      z-50
      md:hidden
    ">
      <aside className="
        w-[260px]
        h-full
        bg-[#0d0d0d]
        border-r
        border-[#1f1f1f]
        p-5
      ">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold text-cyan-400">
            Frontend Arena
          </h1>

          <button
            onClick={onClose}
            className="text-2xl text-white"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col gap-3">

          <NavLink
            onClick={onClose}
            className={navItem}
            to="/"
          >
            <FaHome />
            Dashboard
          </NavLink>

          <NavLink
            onClick={onClose}
            className={navItem}
            to="/javascript"
          >
            <FaJs />
            JavaScript
          </NavLink>

          <NavLink
            onClick={onClose}
            className={navItem}
            to="/html"
          >
            <FaHtml5 />
            HTML
          </NavLink>

          <NavLink
            onClick={onClose}
            className={navItem}
            to="/css"
          >
            <FaCss3Alt />
            CSS
          </NavLink>

          <NavLink
            onClick={onClose}
            className={navItem}
            to="/react"
          >
            <FaReact />
            React
          </NavLink>

          <NavLink
            onClick={onClose}
            className={navItem}
            to="/achievements"
          >
            <FaMedal />
            Achievements
          </NavLink>

          <NavLink
            onClick={onClose}
            className={navItem}
            to="/profile"
          >
            <FaUser />
            Profile
          </NavLink>

        </nav>
      </aside>
    </div>
  )
}