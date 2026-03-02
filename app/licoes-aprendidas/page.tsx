'use client'

import { useEffect, useState } from 'react'
import LessonTable from '@/components/LessonTable'

interface Licao {
  id: string
  categoria: string
  descricao: string
  documento: string
}

export default function LicoesAprendidasPage() {
  const [licoes, setLicoes] = useState<Licao[]>([])
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('')

  useEffect(() => {
    async function fetchLicoes() {
      const res = await fetch('/api/licoes')
      const data = await res.json()
      setLicoes(data || [])
    }

    fetchLicoes()
  }, [])

  const categoriasUnicas = [
    ...new Set(licoes.map((l) => l.categoria))
  ]

  const licoesFiltradas = categoriaFiltro
    ? licoes.filter((l) => l.categoria === categoriaFiltro)
    : licoes

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Lições Aprendidas
      </h1>

      {/* Filtro por categoria */}
      <div className="bg-white p-4 rounded-2xl shadow w-fit">
        <label className="text-sm font-medium mr-2">
          Filtrar por categoria:
        </label>

        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">Todas</option>
          {categoriasUnicas.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Tabela */}
      <LessonTable lessons={licoesFiltradas} />

    </div>
  )
}
