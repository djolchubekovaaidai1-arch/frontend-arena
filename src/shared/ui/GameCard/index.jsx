import { motion } from 'framer-motion'

export default function GameCard({
  title,
  description,
  color,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`
        bg-[#111]
        border
        rounded-2xl
        p-6
        min-h-[180px]
        cursor-pointer
        transition-all
        glow
        hover:-translate-y-1
        flex
        flex-col
        justify-between
        ${color}
      `}
    >
      <div>
       <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {title}
        </h2>

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      <span className="text-cyan-400 mt-6">
        Start Challenge →
      </span>
    </motion.div>
  )
}