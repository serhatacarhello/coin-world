import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import LoginPageController from './pages/login-page/LoginPageController'
import MainPageController from './pages/MainPageController'
import DetailPageController from './pages/detail-page/DetailPageController'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path={'/'} element={<LoginPageController />} />
        <Route path={'/main-page'} element={<MainPageController />} />
        <Route path={'/main-page/:id'} element={<DetailPageController />} />
      </Routes>
    </>
  )
}

export default App
