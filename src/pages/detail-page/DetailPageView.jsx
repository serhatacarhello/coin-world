import { Card, Container } from 'react-bootstrap'
import Loading from '../../components/Loading'
import { Link } from 'react-router-dom'

export default function DetailPageView(props) {
  const { data, isLoading } = props

  console.log('🚀 ~ file: DetailPageView.jsx:4 ~ DetailPageView ~ data:', data)
  if (!data) return <Loading />
  const {
    name,
    symbol,
    rank,
    first_data_at,
    last_data_at,
    logo,
    links,
    links_extended,
  } = data
  return (
    <>
      {isLoading && <Loading />}

      {data && (
        <Card>
          <Card.Img variant="top" src={data?.logo} alt={`${data.name} Logo`} />
          <Card.Body>
            <Card.Title className="text-center pb-1">{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{symbol}</Card.Subtitle>
            <Card.Text>
              Rank: {rank}
              <br />
              First Data: {first_data_at}
              <br />
              Last Data: {last_data_at}
              {/* Diğer bilgileri ekleyin */}
            </Card.Text>
            <Container className="d-flex align-items-center justify-content-between">
              <Card.Link href={data?.links?.website[0]}>Website</Card.Link>
              <Card.Link href={data?.links?.explorer[0]}>Explorer</Card.Link>
              {/* <Card.Link as="button" className="border-1 bg-secondary">
              <Link className="text-white text-decoration-none">More</Link>
            </Card.Link> */}
            </Container>
            {/* Diğer linkleri ekleyin */}
          </Card.Body>
        </Card>
      )}
    </>
  )
}
