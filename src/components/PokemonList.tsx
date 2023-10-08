import { useState, useEffect } from 'react'
import { arrayNumber, objPokemon } from '../logic'
import { Pokemon } from './Pokemon'

export const PokemonList = (): JSX.Element => {
  const [numberPage, setNumberPage] = useState(1)
  const [pokemonList, setPokemonList] = useState<object[] | null>(null)

  useEffect(() => {
    void (async (): Promise<undefined> => {
      const arrayId = arrayNumber(numberPage)
      const arrayPokemon = await Promise.all(arrayId.map(async id => await objPokemon(id)))

      setPokemonList(arrayPokemon)
    })()
  }, [numberPage])

  const previousPage = (): void => {
    if (numberPage > 1) setNumberPage(numberPage - 1)
  }

  const nextPage = (): void => {
    if (numberPage < 102) setNumberPage(numberPage + 1)
  }

  return (
    <div>
      <div className='grid grid-rows-10 grid-cols-2 justify-items-center'>
        <Pokemon arrayPokemon={pokemonList}/>
      </div>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}
