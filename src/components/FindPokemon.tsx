import { useEffect, useState } from 'react'
import { type TPokemon } from '../types'

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
      <header>
        <h1>Find your pokemon!</h1>
        <input className='border-black' onChange={handleChange} name='pokemonName'/>
      </header>
      <div className='grid grid-cols-2'>
        {
          arrayPokemon
            ? arrayPokemon.map((pokemon: TPokemon) => {
              const { id, name, sprites } = pokemon
              const { other: { 'official-artwork': { front_default: imgPokemon } } } = sprites
              return (
                <div className='grid grid-rows-2 justify-items-center' key={id}>
                  <img className='w-10 h-10' src={imgPokemon}/>
                  <h1>{name}</h1>
                </div>
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
