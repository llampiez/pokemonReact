import { useParams } from 'react-router-dom'
import { Evolutions } from './Evolutions'
import { Moves } from './Moves'
import { PokemonCard } from './PokemonCard'
import { OtherInformation } from './OtherInformation'

export const PokemonInformation = (): JSX.Element => {
  const { id } = useParams()

  return (
    <div className='flex flex-row'>
      <div className='basis-1/5'>
        <PokemonCard id={id} />
      </div>
      <div className='basis-4/5'>
        <Evolutions id={id}/>
        <Moves id={id}/>
        <OtherInformation id={id}/>
      </div>
    </div>
  )
}
