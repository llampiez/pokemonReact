import { useState, useEffect } from 'react'
import { type TResults } from '../types'

export const useResults = () => {
  const [resultsRead, setResultsRead] = useState<TResults[] | null>(null)
  const [resultsChange, setResultsChange] = useState<TResults[] | null>(null)

  useEffect(() => {
    (async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1017')
      const { results } = await response.json()

      setResultsRead(results)
      setResultsChange(results)
    })()
  }, [])

  return { resultsRead, resultsChange, setResultsChange }
}
