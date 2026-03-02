interface IndexCardProps {
  title: string
  value: number
  description: string
  color?: 'blue' | 'red' | 'green' | 'yellow'
}

export default function IndexCard({
  title,
  value,
  description,
  color = 'blue'
}: IndexCardProps) {

  function getColorClasses() {
    switch (color) {
      case 'red':
        return 'bg-red-50 text-red-700'
      case 'green':
        return 'bg-green-50 text-green-700'
      case 'yellow':
        return 'bg-yellow-50 text-yellow-700'
      default:
        return 'bg-blue-50 text-blue-700'
    }
  }

  return (
    <div className={`p-6 rounded-2xl shadow bg-white space-y-4`}>
      
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700">
          {title}
        </h2>
      </div>

      <div className={`text-4xl font-bold px-4 py-3 rounded-xl w-fit ${getColorClasses()}`}>
        {value.toFixed(2)}
      </div>

      <p className="text-sm text-gray-500">
        {description}
      </p>

    </div>
  )
}
