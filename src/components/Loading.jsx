import { Spinner } from 'react-bootstrap'

export default function Loading() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner animation="border" variant="warning" className="me-1" />
      Loading...
    </div>
  )
}
