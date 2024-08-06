export interface PokemonVarieties {
  types: [{
    type: {
      name: string
    }
  }]
  id: number
  sprites: {
    front_default: string
  }
  name: string
  moves: [{
    move: {
      url: string
    }
  }]
  weight: number
  height: number
  base_experience: number
  stats: [{
    base_stat: number
    stat: {
      name: string
    }
  }]
}

export interface PokemonSpecies {
  evolution_chain: {
    url: string
  }
}

export interface PokemonEvolution {
  chain: {
    species: SpeciesEvolution
    evolves_to: [EvolvesToEvolution]
  }
}

export interface SpeciesEvolution {
  name: string
  url: string
}

export interface EvolvesToEvolution {
  species: SpeciesEvolution
  evolves_to: [EvolvesToEvolution]
}

// Esto no me interesa

export type TPagination = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  next: boolean
}

export type TResults = {
  name: string
  url: string
}

export type THeader = {
  resultsRead: TResults[] | null
  setPage: React.Dispatch<React.SetStateAction<number>>
  setResultsChange: React.Dispatch<React.SetStateAction<TResults[] | null>>
}
