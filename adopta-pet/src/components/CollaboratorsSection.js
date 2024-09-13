import React from "react"

function CollaboratorsSection() {
  const collaborators = [
    {
      id: 1,
      name: "Colaborador 1",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Colaborador 2",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Colaborador 3",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Colaborador 4",
      logo: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestros Colaboradores
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="flex justify-center">
              <img
                src={collaborator.logo}
                alt={collaborator.name}
                className="object-contain w-24 h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollaboratorsSection
