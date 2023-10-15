export const arrayNumber = (initialNumber: number) => {
  const arrayNumber: number[] = []

  let number = 1 + (initialNumber - 1) * 20

  while (number <= initialNumber * 20) {
    arrayNumber.push(number)
    number++
  }

  return arrayNumber
}
