import typeBug from '../public/bug.png'
import typeDark from '../public/dark.png'
import typeDragon from '../public/dragon.png'
import typeElectric from '../public/electric.png'
import typeFairy from '../public/fairy.png'
import typeFighting from '../public/fighting.png'
import typeFire from '../public/fire.png'
import typeFlying from '../public/flying.png'
import typeGhost from '../public/ghost.png'
import typeGrass from '../public/grass.png'
import typeGround from '../public/ground.png'
import typeIce from '../public/ice.png'
import typeNormal from '../public/normal.png'
import typePoison from '../public/poison.png'
import typePsychic from '../public/psychic.png'
import typeRock from '../public/rock.png'
import typeSteel from '../public/steel.png'
import typeWater from '../public/water.png'

export const TypesPokemon = ({ name }: { name: string }) => {
  let typeName: string = ''

  switch (name) {
    case 'bug':
      typeName = typeBug
      break
    case 'dark':
      typeName = typeDark
      break
    case 'dragon':
      typeName = typeDragon
      break
    case 'electric':
      typeName = typeElectric
      break
    case 'fairy':
      typeName = typeFairy
      break
    case 'fighting':
      typeName = typeFighting
      break
    case 'fire':
      typeName = typeFire
      break
    case 'flying':
      typeName = typeFlying
      break
    case 'ghost':
      typeName = typeGhost
      break
    case 'grass':
      typeName = typeGrass
      break
    case 'ground':
      typeName = typeGround
      break
    case 'ice':
      typeName = typeIce
      break
    case 'normal':
      typeName = typeNormal
      break
    case 'poison':
      typeName = typePoison
      break
    case 'psychic':
      typeName = typePsychic
      break
    case 'rock':
      typeName = typeRock
      break
    case 'steel':
      typeName = typeSteel
      break
    case 'water':
      typeName = typeWater
      break
  }

  return (
    <img src={typeName} />
  )
}
