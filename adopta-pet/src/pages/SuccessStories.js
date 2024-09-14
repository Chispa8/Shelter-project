import React from "react"

function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Luna",
      adopter: "Familia Rodríguez",
      story:
        "Luna fue rescatada de la calle y ahora vive feliz con su nueva familia. Ha aprendido muchos trucos y es la alegría del hogar.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Max",
      adopter: "Juan Pérez",
      story:
        "Max era muy tímido cuando llegó al refugio. Gracias al amor de Juan, ahora es un perro confiado y juguetón.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Bella",
      adopter: "María González",
      story:
        "Bella fue adoptada como compañera para una persona mayor. Ahora brindan compañía mutua y son inseparables.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Historias de Éxito
      </h1>
      <div className="space-y-8">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full md:w-1/3 h-64 object-cover"
            />
            <div className="p-4 md:w-2/3">
              <h2 className="text-2xl font-semibold mb-2">
                {story.name} y {story.adopter}
              </h2>
              <p className="text-gray-700">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SuccessStories
