import { motion } from 'framer-motion'

export default function StatCard({
  title,
  value,
  Icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`
        bg-[#111]
        border
        rounded-2xl
        p-6
        glow
        ${color}
      `}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-gray-400 text-lg">
          {title}
        </h3>

        <Icon className="text-3xl" />
      </div>

      <h2 className="text-4xl font-bold">
        {value}
      </h2>
    </motion.div>
  )
}