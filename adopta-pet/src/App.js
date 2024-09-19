import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Animals from "./pages/Animals"
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import SuccessStories from "./pages/SuccessStories"
import Volunteer from "./pages/Volunteer"
import AdoptionConditions from "./pages/AdoptionConditions"
import Donate from "./pages/Donate"
import Store from "./pages/Store.js"
import { db, storage } from "./firebase"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/events" element={<Events />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/adoption-conditions" element={<AdoptionConditions />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
