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

const App = (): JSX.Element => {
  const [pokemonArray, setPokemons] = useState<object[] | null>(null)

  useEffect(() => {
    void (async (): Promise<undefined> => {
      const fiveRandomId = arrayRandomNum(5, 1, 1018)
      const fiveRandomPokemon = await Promise.all(fiveRandomId.map(async id => await objPokemon(id)))

      setPokemons(fiveRandomPokemon)
    })()
  }, [])

  return (
    <>
      <div>
        {pokemonArray?.map((pokemon: any): JSX.Element => {
          const { id, name, sprites } = pokemon
          const { other: { 'official-artwork': { front_default: imgUrlPokemon } } } = sprites

          return (
            <div key={id}>
              <img src={imgUrlPokemon}/>
              <div>{name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
