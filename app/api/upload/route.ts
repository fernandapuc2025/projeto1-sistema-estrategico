import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'Arquivo não enviado.' },
        { status: 400 }
      )
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Apenas arquivos PDF são permitidos.' },
        { status: 400 }
      )
    }

    // 🔹 Aqui futuramente:
    // 1. Salvar no Supabase Storage
    // 2. Extrair texto do PDF
    // 3. Enviar para camada semântica
    // 4. Vetorizar e armazenar embeddings

    console.log('Arquivo recebido:', file.name)

    return NextResponse.json({
      message: 'PDF recebido com sucesso.',
      fileName: file.name
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Erro interno no servidor.' },
      { status: 500 }
    )
  }
}
