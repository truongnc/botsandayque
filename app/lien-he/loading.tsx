export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-brand-50 to-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <div className="h-6 w-24 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-80 bg-gray-200 rounded-xl mx-auto animate-pulse" />
          <div className="h-5 w-64 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8 space-y-5 animate-pulse">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-xl" />
          ))}
          <div className="h-14 bg-brand-100 rounded-full" />
        </div>
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm p-6 animate-pulse space-y-3">
              <div className="h-5 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-3/4 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
