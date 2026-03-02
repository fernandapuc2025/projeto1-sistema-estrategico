import { NextResponse } from 'next/server'

export async function GET() {
  try {

    // 🔹 FUTURAMENTE:
    // Buscar no Supabase:
    // select id, nome, created_at from documentos

    const documentosMock = [
      {
        id: '1',
        nome: 'Relatorio_Missao_Alpha.pdf',
        created_at: new Date().toISOString()
      },
      {
        id: '2',
        nome: 'Manual_Operacional_Bravo.pdf',
        created_at: new Date().toISOString()
      }
    ]

    return NextResponse.json(documentosMock)

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Erro ao buscar documentos.' },
      { status: 500 }
    )
  }
}
