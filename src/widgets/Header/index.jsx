import XPBar from '../XPBar'

export default function Header() {
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
    </header>
  )
}