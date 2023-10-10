import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { type TPokemon } from '../types'

export const Pokemon = (): JSX.Element => {
  const [pokemon, setPokemon] = useState<TPokemon | null>(null)

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()

      setPokemon(data)
    })()
  }, [id])

  return (
    <>
      {
        pokemon
          ? (
            <>
              <div>
                <p>#{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <img className='w-40'src={pokemon.sprites.other['official-artwork'].front_default}/>
                <div>
                  <p>Height: {pokemon.height}</p>
                  <p>Weight: {pokemon.weight}</p>
                  <p>Base experience: {pokemon.base_experience}</p>
                </div>
              </div>
              <div>
                <p>Stats</p>
              </div>
            </>
            )
          : <div>loading</div>
      }
    </>
  )
}
