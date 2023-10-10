import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PokemonList } from './components/PokemonList'
import { Pokemon } from './components/Pokemon'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonList/>}/>
        <Route path='/pokemon/:id' element={<Pokemon/>}/>
      </Routes>
    </BrowserRouter>
  )
}
