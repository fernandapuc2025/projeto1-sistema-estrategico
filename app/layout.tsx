import './globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export const metadata = {
  title: 'Sistema Estratégico Operacional',
  description: 'Plataforma de análise estratégica e apoio à decisão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="flex bg-gray-100 min-h-screen">
        
        {/* Sidebar fixa */}
        <Sidebar />

        {/* Área principal */}
        <div className="flex-1 flex flex-col">

          {/* Header superior */}
          <Header />

          {/* Conteúdo dinâmico */}
          <main className="flex-1 p-8">
            {children}
          </main>

        </div>
      </body>
    </html>
  )
}
