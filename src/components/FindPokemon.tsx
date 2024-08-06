import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { type TPokemon } from '../types'
import pokeLogo from '../public/pokelogo.png'

export const FindPokemon = () => {
  const [resultsRead, setResultsRead] = useState<object[] | null>(null) // Establecer el type
  const [resultsChange, setResultsChange] = useState<object[] | null>(null) // Establecer el type
  const [arrayPokemon, setArrayPokemon] = useState<TPokemon[] | null>(null) // Establecer el type
  const [next, setNext] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    (async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1017')
      const data = await response.json() // Establecer type

      setResultsRead(data.results)
      setResultsChange(data.results)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      if (resultsChange) {
        const [inicio, fin] = [(page - 1) * 20, page * 20]
        const sliceResultsChange = resultsChange.slice(inicio, fin)

        const fetchArrayPokemon = await Promise.all(sliceResultsChange.map(async (result) => {
          const response = await fetch(result.url)
          const data = await response.json()

          return data
        }))

        setNext(sliceResultsChange.length === 20)
        setArrayPokemon(fetchArrayPokemon)
      }
    })()
  }, [resultsChange, page])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1)
    const { value } = event.target
    const newResults = resultsRead.filter(result => result.name.startsWith(value))
    setResultsChange(newResults)
  }

  const nextPage = () => {
    if (page < 51 && next) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <header className='grid justify-items-center my-3'>
        <img className='w-72' src={pokeLogo} alt="" />
        <h1>Find your pokemon!</h1>
        <input className='border border-black rounded-full px-3' onChange={handleChange} name='pokemonName'/>
      </header>
      <div className='grid grid-cols-2 gap-2 mx-2'>
        {
          arrayPokemon
            ? arrayPokemon.map((pokemon: TPokemon) => {
              const { id, name, sprites } = pokemon
              const { other: { 'official-artwork': { front_default: imgPokemon } } } = sprites
              return (
                <Link to={`/pokemon/${id}`} key={id}>
                  <div className='grid justify-items-center border border-black rounded-lg cursor-pointer'>
                    <img className='w-16' src={imgPokemon}/>
                    <h1>{name}</h1>
                  </div>
                </Link>
              )
            })
            : <div>Loading...</div>
        }
      </div>
      <footer className='flex justify-around'>
        <button onClick={previousPage}>Previous</button>
        <h1>{page}</h1>
        <button onClick={nextPage}>Next</button>
      </footer>
    </>
  )
}
