document.addEventListener("DOMContentLoaded", function () {
  const animals = [
    {
      name: "Bobby",
      age: 3,
      species: "Perro",
      description: "Un perro muy juguetón y amigable.",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Misty",
      age: 2,
      species: "Gato",
      description: "Una gata cariñosa que le encanta dormir.",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Luna",
      age: 1,
      species: "Perro",
      description: "Una cachorra activa y llena de energía.",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Simba",
      age: 8,
      species: "Gato",
      description: "Un gato mayor pero muy afectuoso.",
      image: "https://via.placeholder.com/300",
    },
  ]

  const container = document.getElementById("animal-cards")
  const filterForm = document.getElementById("filter-form")

  function renderCards(filteredAnimals) {
    container.innerHTML = "" // Limpiar las tarjetas existentes
    filteredAnimals.forEach((animal) => {
      const card = document.createElement("div")
      card.classList.add("card")

      card.innerHTML = `
                <img src="${animal.image}" alt="${animal.name}">
                <div class="card-body">
                    <h3>${animal.name}</h3>
                    <p>Edad: ${animal.age} años</p>
                    <p>Especie: ${animal.species}</p>
                    <p>${animal.description}</p>
                    <button>Adoptar</button>
                </div>
            `

      container.appendChild(card)
    })
  }

  function filterAnimals(event) {
    event.preventDefault()

    const species = document.getElementById("species").value
    const age = document.getElementById("age").value

    const filteredAnimals = animals.filter((animal) => {
      // Filtrar por especie
      const matchSpecies = species === "all" || animal.species === species

      // Filtrar por edad
      let matchAge = true
      if (age === "young") {
        matchAge = animal.age <= 2
      } else if (age === "adult") {
        matchAge = animal.age >= 3 && animal.age <= 7
      } else if (age === "senior") {
        matchAge = animal.age >= 8
      }

      return matchSpecies && matchAge
    })

    renderCards(filteredAnimals)
  }

  // Renderizar todas las tarjetas inicialmente
  renderCards(animals)

  // Añadir el evento de filtrado al formulario
  filterForm.addEventListener("submit", filterAnimals)
})
