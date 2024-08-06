import loadingPokeball from '../public/pokeball.png'

export const Loading = () => {
  return (
    <div className='flex justify-center'>
      <img className='animate-spin w-16' src={loadingPokeball} />
    </div>
  )
}
