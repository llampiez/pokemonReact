import { usePokemon } from '../hooks/usePokemon'

export const RandomPokemons = (): JSX.Element => {
  const objPokemonArray = usePokemon()

  return (
      <div className='grid grid-rows-1 grid-cols-5 justify-items-center'>
        {objPokemonArray?.map((objPokemon: any): JSX.Element => {
          const { id, name, sprites } = objPokemon
          const { other: { 'official-artwork': { front_default: imgUrlPokemon } } } = sprites

          return (
            <div className='grid grid-rows-2 grid-cols-1 justify-items-center' key={id}>
              <img className='w-10 h-10' src={imgUrlPokemon}/>
              <h1>{name}</h1>
            </div>
          )
        })}
      </div>
  )
}
