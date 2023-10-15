import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pokemon } from './components/Pokemon'
import { FindPokemon } from './components/FindPokemon'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FindPokemon/>}/>
        <Route path='/pokemon/:id' element={<Pokemon/>}/>
      </Routes>
    </BrowserRouter>
  )
}
