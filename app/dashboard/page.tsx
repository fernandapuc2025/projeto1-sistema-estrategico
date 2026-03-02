'use client'

import { useEffect, useState } from 'react'
import IndexCard from '@/components/IndexCard'
import PatternGraph from '@/components/PatternGraph'

interface Historico {
  data: string
  icm: number
  friccao: number
}

export default function DashboardPage() {
  const [icm, setIcm] = useState<number>(0)
  const [friccao, setFriccao] = useState<number>(0)
  const [historico, setHistorico] = useState<Historico[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/indices')
      const data = await res.json()

      setIcm(data.icm)
      setFriccao(data.friccao)
      setHistorico(data.historico)
    }

    fetchData()
  }, [])

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Dashboard Estratégico
      </h1>

      {/* Cards de índices */}
      <div className="grid md:grid-cols-2 gap-6">
        <IndexCard
          title="ICM"
          value={icm}
          description="Índice de Coerência Operacional"
          color="blue"
        />

        <IndexCard
          title="Índice de Fricção"
          value={friccao}
          description="Nível médio de fricção operacional"
          color="red"
        />
      </div>

      {/* Gráfico */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Evolução dos Índices
        </h2>

        <PatternGraph data={historico} />
      </div>

    </div>
  )
}
