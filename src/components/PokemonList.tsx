import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { arrayNumber } from '../logic'
import { type TPokemon } from '../types'
import { PokeHeader } from './PokeHeader'

export const PokemonList = () => {
  const [page, setPage] = useState(1)
  const [arrayPokemon, setArrayPokemon] = useState<TPokemon[] | null>(null)

  useEffect(() => {
    (async () => {
      const arrayId = arrayNumber(page)

      const fetchArrayPokemon = await Promise.all(
        arrayId.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          const data = await response.json()

          return data
        })
      )

      setArrayPokemon(fetchArrayPokemon)
    })()
  }, [page])

  return (
    <>
      <PokeHeader/>
      <div className='grid grid-cols-2'>
          {arrayPokemon?.map(pokemon => {
            const { id, name, sprites } = pokemon
            const { other: { 'official-artwork': { front_default: imgUrlPokemon } } } = sprites

            return (
              <div key={id}>
                <Link to={`/pokemon/${id}`}>
                  <img className='w-10 h-10' src={imgUrlPokemon}/>
                  <p>{name}</p>
                </Link>
              </div>
            )
          })}
      </div>
    </>
  )
}
