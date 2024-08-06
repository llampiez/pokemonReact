import { useEffect, useState } from 'react'
import { type PokemonVarieties } from '../types/index'
import { TypesPokemon } from './TypesPokemon'

interface PokemonMoves {
  name: string
  id: number
  type: {
    name: string
  }
}

export const Moves = ({ id }: { id: string | undefined }) => {
  const [pokemonVarieties, setPokemonVarieties] = useState<PokemonVarieties | undefined>(undefined)
  const [pokemonMoves, setPokemonMoves] = useState<PokemonMoves[] | undefined>(undefined)
  const [showMoves, setShowMoves] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json() as PokemonVarieties

        setPokemonVarieties(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      if (pokemonVarieties !== undefined) {
        const moves = showMoves ? pokemonVarieties.moves.slice(0, 10) : pokemonVarieties.moves.slice()
        const dataMoves = await Promise.all(moves.map(async ({ move }) => {
          const response = await fetch(move.url)
          const data = await response.json() as PokemonMoves

          return data
        }))

        setPokemonMoves(dataMoves)
      }
    })()
  }, [pokemonVarieties, showMoves])

  const showMore = () => {
    if (pokemonVarieties !== undefined && pokemonVarieties.moves.length > 10) {
      setShowMoves(prev => !prev)
    }
  }

  return (
    <div className='border rounded-lg m-6'>
      <h1 className='text-2xl'>Moves</h1>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
        {pokemonMoves?.map(move => {
          return (
            <div key={move.id} className='border rounded-lg grid justify-items-center m-2'>
              <h1>{move.name}</h1>
              <TypesPokemon name={move.type.name}/>
            </div>
          )
        })}
      </div>
      <button onClick={showMore}>{showMoves ? ('All moves') : ('Less moves')}</button>
    </div>
  )
}
