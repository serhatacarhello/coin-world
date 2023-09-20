import MainPageView from './MainPageView'
import useApi from '../utils/useApi'

export default function MainPageController() {

  const { isLoading, data } = useApi('coins')
 

  return <MainPageView coins={data} isLoading={isLoading} />
}
