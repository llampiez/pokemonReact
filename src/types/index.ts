export type TPokemon = {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        'front_default': string
      }
    }
  }
  height: number
  weight: number
  base_experience: number
}
