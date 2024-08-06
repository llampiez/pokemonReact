import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Pagination } from './Pagination'
import { Header } from './Header'
import { useResults } from '../hooks/useResults'
import { useArrayPokemon } from '../hooks/useArrayPokemon'
import { type TPokemon } from '../types'
import { Loading } from './Loading'

export const PokemonAll = () => {
  const [next, setNext] = useState(false)
  const [page, setPage] = useState(1)

  const { resultsRead, resultsChange, setResultsChange } = useResults()
  const { arrayPokemon, loading } = useArrayPokemon(resultsChange, page, setNext)

  return (
    <>
      <Header resultsRead={resultsRead} setPage={setPage} setResultsChange={setResultsChange}/>
      {loading && <Loading/>}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mx-2'>
        {
          arrayPokemon?.map((pokemon: TPokemon) => {
            const { id, name, sprites } = pokemon
            const { front_default: imgPokemon } = sprites
            return (
              <Link to={`/pokemon/${id}`} key={id}>
                <div className='grid justify-items-center border border-black rounded-lg cursor-pointer hover:bg-purple-400'>
                  <img className='w-16' src={imgPokemon}/>
                  <h1>{name}</h1>
                </div>
              </Link>
            )
          })
        }
      </div>
      <Pagination page={page} setPage={setPage} next={next}/>
    </>
  )
}
