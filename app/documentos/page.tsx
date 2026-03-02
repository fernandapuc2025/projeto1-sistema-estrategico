'use client'

import { useEffect, useState } from 'react'
import UploadPDF from '@/components/UploadPDF'

interface Documento {
  id: string
  name: string
  created_at: string
}

export default function DocumentosPage() {
  const [documentos, setDocumentos] = useState<Documento[]>([])

  useEffect(() => {
    async function fetchDocs() {
      const res = await fetch('/api/documentos')
      const data = await res.json()
      setDocumentos(data)
    }

    fetchDocs()
  }, [])

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Gestão de Documentos
      </h1>

      {/* Upload */}
      <UploadPDF />

      {/* Lista de documentos */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Documentos Enviados
        </h2>

        {documentos.length === 0 ? (
          <p className="text-gray-500">
            Nenhum documento enviado ainda.
          </p>
        ) : (
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="py-2">Nome</th>
                <th className="py-2">Data</th>
              </tr>
            </thead>
            <tbody>
              {documentos.map((doc) => (
                <tr key={doc.id} className="border-b">
                  <td className="py-2">{doc.name}</td>
                  <td className="py-2">
                    {new Date(doc.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  )
}
