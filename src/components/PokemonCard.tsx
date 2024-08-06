import { useEffect, useState } from 'react'
import { TypesPokemon } from './TypesPokemon'
import { Loading } from './Loading'
import { type PokemonVarieties } from '../types'

export const PokemonCard = ({ id }: { id: string | undefined }) => {
  const [pokemonVarieties, setPokemonVarieties] = useState<PokemonVarieties | undefined>(undefined)
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

  return (
    <>
      {loading && <Loading/>}
      <div className='grid justify-items-center border'>
        <div className='flex justify-between w-full border'>
          {pokemonVarieties?.types.map((typeObj, index) => {
            const { name } = typeObj.type

            return (
              <TypesPokemon key={index} name={name}/>
            )
          })}
          <p>#{pokemonVarieties?.id}</p>
        </div>
        <img className='w-40' src={pokemonVarieties?.sprites.front_default}/>
        <h1 className='w-full text-center border'>{pokemonVarieties?.name}</h1>
      </div>
    </>
  )
}
