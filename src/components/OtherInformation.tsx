import { useEffect, useState } from 'react'
import { type PokemonVarieties } from '../types'
import { Loading } from './Loading'

export const OtherInformation = ({ id }: { id: string | undefined }) => {
  const [pokemonVarieties, setPokemonVarieties] = useState<PokemonVarieties | undefined>(undefined)
  const [moreInformation, setMoreInformation] = useState(false)
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

  const onClickInformation = () => {
    setMoreInformation(previous => !previous)
  }

  return (
    <div className='border rounded-lg m-6'>
      <h1 className='text-2xl'>Other Information</h1>
      {loading && <Loading/>}
      <div>
        <div className='border rounded-lg'>
          <h1>weight</h1>
          <h2>{pokemonVarieties?.weight}</h2>
        </div>
        <div className='border rounded-lg'>
          <h1>height</h1>
          <h2>{pokemonVarieties?.height}</h2>
        </div>
        <div className='border rounded-lg'>
          <h1>base experience</h1>
          <h2>{pokemonVarieties?.base_experience}</h2>
        </div>
        {moreInformation
          ? pokemonVarieties?.stats.map((stat, index) => {
            return (
              <div key={index} className='border rounded-lg'>
                <h1>{stat.stat.name}</h1>
                <h2>{stat.base_stat}</h2>
              </div>
            )
          })
          : undefined
        }
      </div>
      <button onClick={onClickInformation}>
        {moreInformation ? ('Less information') : ('More information')}
      </button>
    </div>
  )
}
