import { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard'
import { Loading } from './Loading'
import { type PokemonEvolution, type PokemonSpecies, type EvolvesToEvolution } from '../types'

export const Evolutions = ({ id }: { id: string | undefined }) => {
  const [pokemonEvolution, setPokemonEvolution] = useState<PokemonEvolution | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const responseSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const dataSpecies = await responseSpecies.json() as PokemonSpecies

        const responseEvolution = await fetch(dataSpecies.evolution_chain.url)
        const dataEvolution = await responseEvolution.json() as PokemonEvolution

        setPokemonEvolution(dataEvolution)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const getUrlEvolution = (array: string[], obj: EvolvesToEvolution) => {
    const match = obj.species.url.match(/\/(\d+)\/$/) as string[]
    if (match?.[1] !== undefined && match[1] !== id) {
      array.push(match[1])
    }

    obj.evolves_to.map(evolve => getUrlEvolution(array, evolve))

    return array
  }

  const getIdEvolution = () => {
    if (pokemonEvolution === undefined) return undefined

    const arrayEvolution: string[] = []
    getUrlEvolution(arrayEvolution, pokemonEvolution?.chain)

    return arrayEvolution
  }

  const idEvolution = getIdEvolution()

  return (
    <div className='border rounded-lg m-6'>
      <h1 className='text-2xl'>Evolutions</h1>
      <div className='flex flex-row'>
        {loading && <Loading/>}
        {idEvolution?.map(id => {
          return (
            <PokemonCard key={id} id={id}/>
          )
        })}
      </div>
    </div>
  )
}
