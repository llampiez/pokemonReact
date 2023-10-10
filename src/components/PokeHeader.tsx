import { useNavigate } from 'react-router-dom'
import pokemonLogo from '../public/pokemonLogo.png'

type TForm = {
  pokemonName: string
}

export const PokeHeader = () => {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries()) as TForm

    navigate(`/pokemon/${formJson.pokemonName}`)
  }

  return (
    <header>
      <img src={pokemonLogo}/>
      <form onSubmit={handleSubmit}>
        <input name='pokemonName'/>
        <button type='submit'>Search</button>
      </form>
    </header>
  )
}
