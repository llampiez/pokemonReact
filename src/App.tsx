import { useState, useEffect } from 'react'

const arrayRandomNum = (length: number, minNum: number, maxNum: number): number[] => {
  const numbers: number[] = []

  while (numbers.length < length) {
    const randomNum: number = Math.floor(Math.random() * (maxNum - minNum + minNum))
    numbers.push(randomNum)
  }

  return numbers
}

const objPokemon = async (idPokemon: number): Promise<object> => {
  const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  const dataPokemon = await responsePokemon.json()

  return dataPokemon
}

const usePokemon = (): object[] | null => {
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

const RandomPokemons = (): JSX.Element => {
  const objPokemonArray = usePokemon()

  return (
      <div>
        {objPokemonArray?.map((objPokemon: any): JSX.Element => {
          const { id, name, sprites } = objPokemon
          const { other: { 'official-artwork': { front_default: imgUrlPokemon } } } = sprites

          return (
            <div key={id}>
              <img src={imgUrlPokemon}/>
              <div>{name}</div>
            </div>
          )
        })}
      </div>
  )
}

const App = (): JSX.Element => {
  return (
    <>
      <RandomPokemons/>
    </>
  )
}

export default App
