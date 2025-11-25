'use client'

export default function TestGallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">Test Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="mb-2">Regular IMG Tag</h3>
            <img 
              src="/images/exterior/exterior-1.jpg" 
              alt="Test 1"
              className="w-full h-48 object-cover rounded"
              onError={(e) => {
                console.error('Regular img failed:', e.currentTarget.src)
                e.currentTarget.style.border = '2px solid red'
              }}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="mb-2">Direct File Path</h3>
            <img 
              src="/images/exterior/1.jpg" 
              alt="Test 2"
              className="w-full h-48 object-cover rounded"
              onError={(e) => {
                console.error('Direct path failed:', e.currentTarget.src)
                e.currentTarget.style.border = '2px solid red'
              }}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="mb-2">Aerial View</h3>
            <img 
              src="/images/exterior/aerial-view.jpg" 
              alt="Test 3"
              className="w-full h-48 object-cover rounded"
              onError={(e) => {
                console.error('Aerial view failed:', e.currentTarget.src)
                e.currentTarget.style.border = '2px solid red'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}