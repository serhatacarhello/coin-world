import { createContext, useContext, useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // at the beginning check for user state
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      setUser(storedUser)
      setLoggedIn(true)
      navigate('/main-page')
      setIsLoading(false)
    } else {
      navigate('/')
      setIsLoading(false)
    }
  }, [])

  const login = async (newUser) => {
    setIsLoading(true)
    // newUser.id= uuidv4()? we added id in LoginPage
    setUser(newUser)
    setLoggedIn(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    localStorage.setItem('user', JSON.stringify(newUser))
    setIsLoading(false)
  }

  const logout = async (callback) => {
    setLoggedIn(false)
    setUser(null)
    localStorage.removeItem('user')
    //to redirect to user to login page it triggers useEffect and it setUser(null)
    callback()
  }

  const values = {
    loggedIn,
    login,
    user,
    logout,
    setIsLoading,
  }

  return (
    <AuthContext.Provider value={values}>
      {isLoading ? <Spinner animation="grow" variant="warning" /> : children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)
export { AuthProvider, useAuth }
