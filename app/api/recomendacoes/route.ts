import { NextResponse } from 'next/server'

export async function GET() {
  try {

    // 🔹 MOCK TEMPORÁRIO
    // Futuramente:
    // - Geradas a partir de padrões detectados
    // - Baseadas em ICM e Fricção
    // - Apoio à decisão com modelo preditivo

    const recomendacoes = [
      {
        id: '1',
        titulo: 'Reforçar alinhamento interequipes',
        descricao:
          'Implementar briefing estruturado antes das operações para reduzir ruídos de comunicação.',
        prioridade: 'Alta',
        origem: 'Padrão detectado em múltiplos relatórios'
      },
      {
        id: '2',
        titulo: 'Revisar cadeia logística',
        descricao:
          'Auditar fluxo de suprimentos para reduzir atrasos recorrentes.',
        prioridade: 'Média',
        origem: 'Índice elevado de fricção logística'
      },
      {
        id: '3',
        titulo: 'Padronizar protocolo de comunicação',
        descricao:
          'Estabelecer canal único para ordens críticas durante operações.',
        prioridade: 'Alta',
        origem: 'Lições aprendidas – categoria Comunicação'
      }
    ]

    return NextResponse.json(recomendacoes)

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Erro ao gerar recomendações.' },
      { status: 500 }
    )
  }
}
