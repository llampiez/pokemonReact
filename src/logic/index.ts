export const arrayRandomNum = (length: number, minNum: number, maxNum: number): number[] => {
  const numbers: number[] = []

  while (numbers.length < length) {
    const randomNum: number = Math.floor(Math.random() * (maxNum - minNum + minNum))
    numbers.push(randomNum)
  }

  return numbers
}

export const arrayNumber = (initialNumber: number) => {
  const arrayNumber: number[] = []

  let number = 1 + (initialNumber - 1) * 20

  while (number <= initialNumber * 20) {
    arrayNumber.push(number)
    number++
  }

  return arrayNumber
}
