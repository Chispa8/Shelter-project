import React, { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../firebase"

function AddAnimal() {
  const [animal, setAnimal] = useState({
    name: "",
    type: "",
    age: "",
    description: "",
  })
  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let imageUrl = ""
      if (image) {
        const imageRef = ref(storage, `animals/${image.name}`)
        await uploadBytes(imageRef, image)
        imageUrl = await getDownloadURL(imageRef)
      }

      await addDoc(collection(db, "animals"), {
        ...animal,
        imageUrl,
      })

      setAnimal({ name: "", type: "", age: "", description: "" })
      setImage(null)
      alert("Animal added successfully!")
    } catch (error) {
      console.error("Error adding animal: ", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={animal.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="type"
        value={animal.type}
        onChange={handleChange}
        placeholder="Type"
        required
      />
      <input
        name="age"
        value={animal.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <textarea
        name="description"
        value={animal.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Add Animal</button>
    </form>
  )
}

export default AddAnimal
