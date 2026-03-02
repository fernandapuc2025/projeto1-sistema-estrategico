'use client'

import { useEffect, useState } from 'react'
import IndexCard from '@/components/IndexCard'

interface Historico {
  id: string
  icm: number
  friccao: number
  created_at: string
}

export default function IndicesPage() {
  const [icmAtual, setIcmAtual] = useState<number>(0)
  const [friccaoAtual, setFriccaoAtual] = useState<number>(0)
  const [historico, setHistorico] = useState<Historico[]>([])

  useEffect(() => {
    async function fetchIndices() {
      const res = await fetch('/api/indices')
      const data = await res.json()

      setIcmAtual(data.icm)
      setFriccaoAtual(data.friccao)
      setHistorico(data.historico || [])
    }

    fetchIndices()
  }, [])

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Índices Estratégicos
      </h1>

      {/* Cards principais */}
      <div className="grid md:grid-cols-2 gap-6">
        <IndexCard
          title="ICM Atual"
          value={icmAtual}
          description="Índice de Coerência Operacional"
          color="blue"
        />

        <IndexCard
          title="Fricção Atual"
          value={friccaoAtual}
          description="Índice médio de fricção identificada"
          color="red"
        />
      </div>

      {/* Histórico */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Histórico de Índices
        </h2>

        {historico.length === 0 ? (
          <p className="text-gray-500">
            Nenhum histórico disponível.
          </p>
        ) : (
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="py-2">Data</th>
                <th className="py-2">ICM</th>
                <th className="py-2">Fricção</th>
              </tr>
            </thead>
            <tbody>
              {historico.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-2">{item.icm.toFixed(2)}</td>
                  <td className="py-2">{item.friccao.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  )
}
