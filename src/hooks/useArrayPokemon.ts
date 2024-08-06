import { useState, useEffect } from 'react'
import { type TResults, type TPokemon } from '../types'

export const useArrayPokemon = (resultsChange: TResults[] | null, page: number, setNext: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [arrayPokemon, setArrayPokemon] = useState<TPokemon[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      if (resultsChange !== null) {
        try {
          setArrayPokemon(null)
          setLoading(true)

          const [inicio, fin] = [(page - 1) * 40, page * 40]
          const sliceResultsChange = resultsChange.slice(inicio, fin)

          const fetchArrayPokemon = await Promise.all(sliceResultsChange.map(async (result) => {
            const response = await fetch(result.url)
            const data = await response.json()

            return data
          }))

          setArrayPokemon(fetchArrayPokemon)
          setNext(sliceResultsChange.length === 40)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
    })()
  }, [resultsChange, page])

  return { arrayPokemon, loading }
}
