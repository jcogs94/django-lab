import { useState } from 'react'
import CompaniesCard from './components/CompaniesCard/CompaniesCard.jsx'
import LocationsCard from './components/LocationsCard/LocationsCard.jsx'
import './App.css'

function App() {
  return <>
    <h1>Django Lab</h1>
    <CompaniesCard />
    <LocationsCard />
  </>
}

export default App
