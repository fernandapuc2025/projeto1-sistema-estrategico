interface Lesson {
  id: string
  categoria: string
  descricao: string
  documento: string
}

interface LessonTableProps {
  lessons: Lesson[]
}

export default function LessonTable({ lessons }: LessonTableProps) {
  if (!lessons || lessons.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow text-gray-500">
        Nenhuma lição encontrada.
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead>
          <tr className="border-b text-left text-gray-600">
            <th className="py-3 pr-4">Categoria</th>
            <th className="py-3 pr-4">Descrição</th>
            <th className="py-3">Documento</th>
          </tr>
        </thead>

        <tbody>
          {lessons.map((lesson) => (
            <tr
              key={lesson.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-3 pr-4 font-medium">
                {lesson.categoria}
              </td>

              <td className="py-3 pr-4 text-gray-700">
                {lesson.descricao}
              </td>

              <td className="py-3 text-gray-500 text-xs">
                {lesson.documento}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}
