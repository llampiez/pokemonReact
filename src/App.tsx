import { RandomPokemons } from './components/RandomPokemons'
import test from './public/pokemonLogo.png'

export const App = (): JSX.Element => {
  return (
    <>
      <div>
        <img src={test}/>
      </div>
      <RandomPokemons/>
    </>
  )
}
