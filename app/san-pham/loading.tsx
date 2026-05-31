export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header skeleton */}
      <div className="bg-gradient-to-br from-brand-50 to-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <div className="h-6 w-24 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-72 bg-gray-200 rounded-xl mx-auto animate-pulse" />
          <div className="h-5 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
      </div>
      {/* Product grid skeleton */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden flex animate-pulse">
              <div className="w-48 h-52 bg-gray-200 flex-shrink-0" />
              <div className="p-6 flex-1 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-8 bg-gray-200 rounded-full w-28 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
