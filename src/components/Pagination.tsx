import { useWindowWidth } from '../hooks/useWindowWidth'
import { type TPagination } from '../types'

export const Pagination = ({ page, setPage, next }: TPagination) => {
  const width = useWindowWidth()

  const nextPage = () => {
    if (page < 51 && next) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const v1 = (page) => {
    let v5 = []
    let v6 = 1

    if (width > 768) {
      while (v6 <= 26) {
        v5.push(v6)
        v6++
      }
      return v5
    }

    if (page < 11) {
      v5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '...', 26]

      return v5
    } else if (page > 16) {
      v5 = [1, '...', 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
      return v5
    } else {
      v5 = [1, '...', page - 4, page - 3, page - 2, page - 1, page, page + 1, page + 2, page + 3, page + 4, '...', 26]
      return v5
    }
  }

  const test = v1(page)

  const colorBotton = (buttonContent) => {
    if (buttonContent === page) {
      return 'underline text-purple-400'
    }
    return ''
  }

  return (
    <footer className='flex justify-between mx-2 my-3'>
      <button onClick={previousPage}>«</button>
      {test.map((buttonPage, index) => {
        if (buttonPage === '...') {
          return (
            <button className='cursor-default' key={index}>{buttonPage}</button>
          )
        }
        return (
          <button className={`${colorBotton(buttonPage)} hover:underline hover:text-purple-400 cursor-pointer`} key={index} onClick={() => setPage(buttonPage)}>{buttonPage}</button>
        )
      })}
      <button onClick={nextPage}>»</button>
    </footer>
  )
}
