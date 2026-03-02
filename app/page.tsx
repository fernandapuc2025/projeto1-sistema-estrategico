import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        Sistema Estratégico Operacional
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Plataforma institucional para análise de relatórios, identificação de padrões,
        mensuração de índices estratégicos e apoio à decisão.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <Link
          href="/dashboard"
          className="bg-blue-600 text-white p-6 rounded-2xl shadow hover:bg-blue-700 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Acessar Dashboard
          </h2>
          <p className="text-sm opacity-90">
            Visualizar índices estratégicos e panorama operacional.
          </p>
        </Link>

        <Link
          href="/documentos"
          className="bg-gray-800 text-white p-6 rounded-2xl shadow hover:bg-gray-900 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Gerenciar Documentos
          </h2>
          <p className="text-sm opacity-90">
            Enviar relatórios e iniciar processamento analítico.
          </p>
        </Link>

      </div>
    </div>
  )
}
