import DetailPageView from './DetailPageView'
import { useParams } from 'react-router-dom'
import useApi from '../../utils/useApi'

export default function DetailPageController() {
  const params = useParams()
  const coinId = params?.id

  console.log(
    '🚀 ~ file: DetailPageController.jsx:7 ~ DetailPageController ~ params:',
    params.id
  )

  const { isLoading, data } = useApi(`coins/${coinId}`)

  console.log(
    '🚀 ~ file: DetailPageController.jsx:18 ~ DetailPageController ~ data1:',
    data
  )
  return <DetailPageView data={data} isLoading={isLoading} />
}
