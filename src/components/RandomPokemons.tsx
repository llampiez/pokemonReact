import { usePokemon } from '../hooks/usePokemon'

export const RandomPokemons = (): JSX.Element => {
  const objPokemonArray = usePokemon()

  return (
      <div>
        {objPokemonArray?.map((objPokemon: any): JSX.Element => {
          const { id, name, sprites } = objPokemon
          const { other: { 'official-artwork': { front_default: imgUrlPokemon } } } = sprites

          return (
            <div key={id}>
              <img src={imgUrlPokemon}/>
              <h1 className='text-3xl font-bold underline text-red-600'>{name}</h1>
            </div>
          )
        })}
      </div>
  )
}
