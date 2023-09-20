import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

function MainPageView(props) {
  console.log('🚀 ~ file: MainPageView.jsx:8 ~ MainPageView ~ props:', props)
  const { coins, isLoading } = props
  console.log('🚀 ~ file: MainPageView.jsx:9 ~ MainPageView ~ coins:', coins)

  let itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  let startIndex = (currentPage - 1) * itemsPerPage
  let endIndex = startIndex + itemsPerPage
  const visibleCoins = coins?.slice(startIndex, endIndex)

  console.log('🚀 ~ file: MainPageView.jsx:5 ~ MainPageView ~ coins:', coins)

  return (
    <>
      {isLoading && !visibleCoins && <Loading />}

      {visibleCoins && (
        <div className="container d-flex flex-column pt-3  mw-100">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="mt-3 mx-2 p-3 min-vw-100"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Coin Id</th>

                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>
              {visibleCoins?.map((coin, i) => {
                return (
                  <tr key={i}>
                    <td>{coin.rank} </td>
                    <td>
                      <Link
                        className="text-decoration-none"
                        to={`/main-page/${coin.id}`}
                      >
                        {coin.name}
                      </Link>
                    </td>
                    <td>{coin.id}</td>
                    <td>{coin.symbol}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <div className="container d-flex gap-1 align-items-center justify-content-center">
            <Button
              onClick={() =>
                setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
              }
            >
              Prev
            </Button>
            <Button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default MainPageView
