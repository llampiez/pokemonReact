import { useState, useEffect } from 'react'
import { arrayRandomNum, objPokemon } from '../logic'

export const usePokemon = (): object[] | null => {
  const [objPokemonArray, setObjPokemonArray] = useState<object[] | null>(null)

  useEffect(() => {
    void (async (): Promise<undefined> => {
      const fiveRandomId = arrayRandomNum(5, 1, 1018)
      const fiveRandomPokemon = await Promise.all(fiveRandomId.map(async id => await objPokemon(id)))

      setObjPokemonArray(fiveRandomPokemon)
    })()
  }, [])

  return objPokemonArray
}
