'use client'

import { useState } from 'react'

export default function UploadPDF() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault()

    if (!file) {
      setMessage('Selecione um arquivo PDF.')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      setLoading(true)
      setMessage(null)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) {
        throw new Error('Erro ao enviar o arquivo.')
      }

      setMessage('PDF enviado com sucesso!')
      setFile(null)
    } catch (error) {
      setMessage('Erro ao enviar o PDF.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow max-w-lg">

      <h2 className="text-xl font-semibold mb-4">
        Upload de Documento PDF
      </h2>

      <form onSubmit={handleUpload} className="space-y-4">

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm border rounded-lg p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar PDF'}
        </button>

        {message && (
          <p className="text-sm text-gray-600">
            {message}
          </p>
        )}

      </form>
    </div>
  )
}
