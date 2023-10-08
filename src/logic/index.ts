export const arrayRandomNum = (length: number, minNum: number, maxNum: number): number[] => {
  const numbers: number[] = []

  while (numbers.length < length) {
    const randomNum: number = Math.floor(Math.random() * (maxNum - minNum + minNum))
    numbers.push(randomNum)
  }

  return numbers
}

export const objPokemon = async (idPokemon: number): Promise<object> => {
  const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  const dataPokemon = await responsePokemon.json()

  return dataPokemon
}

export const arrayNumber = (initialNumber: number): number[] => {
  const arrayNumber = []

  let number = 1 + (initialNumber - 1) * 20

  while (number <= initialNumber * 20) {
    arrayNumber.push(number)
    number++
  }

  return arrayNumber
}
