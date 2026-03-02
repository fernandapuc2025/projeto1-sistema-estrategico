import { NextResponse } from 'next/server'

export async function GET() {
  try {

    // 🔹 MOCK TEMPORÁRIO
    // Futuramente:
    // - Buscar lições extraídas no banco
    // - Classificadas via ML
    // - Relacionadas ao documento de origem

    const licoes = [
      {
        id: '1',
        categoria: 'Planejamento',
        descricao: 'Falta de alinhamento entre equipes impactou a execução.',
        documento: 'Relatorio_Missao_Alpha.pdf'
      },
      {
        id: '2',
        categoria: 'Comunicação',
        descricao: 'Ruído na transmissão de ordens causou atraso operacional.',
        documento: 'Manual_Operacional_Bravo.pdf'
      },
      {
        id: '3',
        categoria: 'Logística',
        descricao: 'Atraso no fornecimento comprometeu a prontidão.',
        documento: 'Relatorio_Missao_Alpha.pdf'
      }
    ]

    return NextResponse.json(licoes)

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Erro ao buscar lições.' },
      { status: 500 }
    )
  }
}
