export const Pokemon = ({ arrayPokemon }: any): JSX.Element => {
  return (
    arrayPokemon?.map((pokemon: any): JSX.Element => {
      const { id, name, sprites } = pokemon
      const { other: { 'official-artwork': { front_default: imgUrlPokemon } } } = sprites

      return (
        <div className='grid grid-rows-2 grid-cols-1 justify-items-center' key={id}>
          <img className='w-10 h-10' src={imgUrlPokemon}/>
          <h1>{name}</h1>
        </div>
      )
    })
  )
}
