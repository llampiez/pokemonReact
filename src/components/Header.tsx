import pokeLogo from '../public/pokelogo.png'
import { type THeader } from '../types'

export const Header = ({ resultsRead, setPage, setResultsChange }: THeader) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setResultsChange(resultsRead!.filter(result => result.name.startsWith(value)))
    setPage(1)
  }

  return (
    <header className='grid justify-items-center my-3'>
      <img className='w-72' src={pokeLogo} alt="" />
      <input className='border border-black rounded-full px-3 text-center' onChange={handleChange} name='pokemonName' placeholder='Find your Pokemon!'/>
    </header>
  )
}
