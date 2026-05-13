import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { day: 'Mon', xp: 50 },
  { day: 'Tue', xp: 120 },
  { day: 'Wed', xp: 180 },
  { day: 'Thu', xp: 250 },
  { day: 'Fri', xp: 320 },
  { day: 'Sat', xp: 420 },
  { day: 'Sun', xp: 550 },
]

export default function XPChart() {
  return (
    <div className="
      bg-[#111]
      border
      border-cyan-400
      rounded-2xl
      p-6
      glow
    ">
      <h2 className="text-2xl font-bold mb-6">
        XP Progress
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <XAxis dataKey="day" stroke="#888" />

            <YAxis stroke="#888" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="xp"
              stroke="#22d3ee"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}