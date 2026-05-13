import { NavLink } from 'react-router-dom'


import {
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaMedal,
    FaReact,
    FaHome,
    FaUser,
} from 'react-icons/fa'

export default function Sidebar() {
    const navItem =
        'flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-[#1a1a1a] hover:text-cyan-400'

    return (
        <aside className="
  hidden
  md:flex
  flex-col
  w-[260px]
  min-h-screen
  border-r
  border-[#1f1f1f]
  p-5
  bg-[#0d0d0d]
">
            <h1 className="text-3xl font-bold text-cyan-400 mb-10 tracking-wide">
                Frontend Arena
            </h1>

            <nav className="flex flex-col gap-3">
                <NavLink className={navItem} to="/">
                    <FaHome />
                    Dashboard
                </NavLink>
                
                <NavLink className={navItem} to="/javascript">
                    <FaJs />
                    JavaScript
                </NavLink>

                <NavLink className={navItem} to="/html">
                    <FaHtml5 />
                    HTML
                </NavLink>

                <NavLink className={navItem} to="/css">
                    <FaCss3Alt />
                    CSS
                </NavLink>

                <NavLink className={navItem} to="/react">
                    <FaReact />
                    React
                </NavLink>

                <NavLink className={navItem} to="/achievements">
                    <FaMedal />
                    Achievements
                </NavLink>

                <NavLink className={navItem} to="/profile">
                    <FaUser />
                    Profile
                </NavLink>

            </nav>
        </aside>
    )
}