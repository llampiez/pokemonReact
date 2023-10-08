import { RandomPokemons } from './components/RandomPokemons'
import { PokemonList } from './components/PokemonList'
import { PokeHeader } from './components/PokeHeader'

export const App = (): JSX.Element => {
  return (
    <>
      <PokeHeader/>
      <RandomPokemons/>
      <PokemonList/>
    </>
  )
}
