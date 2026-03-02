'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts'

interface DataPoint {
  name: string
  value: number
}

interface PatternGraphProps {
  title: string
  data: DataPoint[]
}

export default function PatternGraph({
  title,
  data
}: PatternGraphProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-500">
          Sem dados disponíveis.
        </p>
      ) : (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

    </div>
  )
}
