import { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon'
import { arrayRandomNum, objPokemon } from '../logic'

export const RandomPokemons = (): JSX.Element => {
  const [randomPokemon, setRandomPokemon] = useState<object[] | null>(null)

  useEffect(() => {
    void (async (): Promise<undefined> => {
      const arrayId = arrayRandomNum(5, 1, 1018)
      const arrayPokemon = await Promise.all(arrayId.map(async id => await objPokemon(id)))

      setRandomPokemon(arrayPokemon)
    })()
  }, [])

  return (
    <div className='grid grid-rows-1 grid-cols-5 justify-items-center'>
      <Pokemon arrayPokemon={randomPokemon}/>
    </div>
  )
}
