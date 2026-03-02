'use client'

import { useEffect, useState } from 'react'

interface Recomendacao {
  id: string
  titulo: string
  descricao: string
  prioridade: 'Alta' | 'Média' | 'Baixa'
  origem: string
}

export default function RecomendacoesPage() {
  const [recomendacoes, setRecomendacoes] = useState<Recomendacao[]>([])

  useEffect(() => {
    async function fetchRecomendacoes() {
      const res = await fetch('/api/recomendacoes')
      const data = await res.json()
      setRecomendacoes(data || [])
    }

    fetchRecomendacoes()
  }, [])

  function prioridadeCor(prioridade: string) {
    switch (prioridade) {
      case 'Alta':
        return 'bg-red-100 text-red-700'
      case 'Média':
        return 'bg-yellow-100 text-yellow-700'
      case 'Baixa':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Recomendações Estratégicas
      </h1>

      {recomendacoes.length === 0 ? (
        <div className="bg-white p-6 rounded-2xl shadow text-gray-500">
          Nenhuma recomendação disponível no momento.
        </div>
      ) : (
        <div className="grid gap-6">
          {recomendacoes.map((rec) => (
            <div
              key={rec.id}
              className="bg-white p-6 rounded-2xl shadow space-y-4"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {rec.titulo}
                </h2>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${prioridadeCor(
                    rec.prioridade
                  )}`}
                >
                  {rec.prioridade}
                </span>
              </div>

              <p className="text-gray-700">
                {rec.descricao}
              </p>

              <div className="text-sm text-gray-500">
                Origem: {rec.origem}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
