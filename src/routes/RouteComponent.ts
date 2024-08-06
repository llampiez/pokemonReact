import type React from 'react'
import { PokemonAll } from '../components/PokemonAll'
import { PokemonInformation } from '../components/PokemonInformation'

interface Route {
  path: string
  component: React.FunctionComponent<unknown> // Averiguar porque funciona este react function component
}

const RouteComponent: Route[] = [{
  path: '/',
  component: PokemonAll
},
{
  path: '/pokemon/:id',
  component: PokemonInformation
}
]

// Se tiene que hacer default porque son rutas, TODAS LAS RUTAS SE HACEN DEFAULT
export default RouteComponent
