import { NextResponse } from 'next/server'

export async function GET() {
  try {

    // 🔹 MOCK TEMPORÁRIO
    // Futuramente:
    // - Buscar eventos no banco
    // - Aplicar fórmula de ICM
    // - Calcular índice médio de fricção
    // - Gerar histórico real

    const historico = [
      {
        id: '1',
        icm: 0.72,
        friccao: 0.34,
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString()
      },
      {
        id: '2',
        icm: 0.68,
        friccao: 0.41,
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString()
      },
      {
        id: '3',
        icm: 0.75,
        friccao: 0.29,
        created_at: new Date().toISOString()
      }
    ]

    const icmAtual = historico[historico.length - 1].icm
    const friccaoAtual = historico[historico.length - 1].friccao

    return NextResponse.json({
      icm: icmAtual,
      friccao: friccaoAtual,
      historico
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Erro ao calcular índices.' },
      { status: 500 }
    )
  }
}
