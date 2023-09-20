import { useFormik } from 'formik'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Container, Image, ToastContainer } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { v4 as uuidv4 } from 'uuid'
import Toast from 'react-bootstrap/Toast'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPageView(props) {
  const navigate = useNavigate()
  const { initialValues, validationSchema } = props

  const { login, loggedIn, setIsLoading } = useAuth()
  console.log('🚀 ~ file: LoginPageView.jsx:12 ~ LoginPageView ~ login:', login)

  useEffect(() => {
    if (loggedIn) {
      navigate('/main-page')
      console.log('usereffect calıştı ', user)
    }
  }, [loggedIn])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async (values, bag) => {
      console.log(values)
      console.log(bag)
      const newUser = {
        ...values,
        id: uuidv4(),
      }

      console.log(newUser)

      try {
        login(newUser)
        //reset form
        bag.resetForm()
        navigate('/main-page')
      } catch (err) {
        console.log(err, 'err in login')
        bag.setErrors({ general: err.response.data.message })
      }
    },
  })

  return (
    <div className="login-page d-flex flex-column justify-content-center align-items-center gap-1">
      <Container className="d-flex justify-content-center align-items-center">
        <Image src="./coin-logo.png" roundedCircle width={70} height={70} />
        <h2>Login Form</h2>
      </Container>

      {formik.errors.general && (
        <div
          aria-live="polite"
          aria-atomic="true"
          className="bg-dark position-relative"
          style={{ minHeight: '240px' }}
        >
          <ToastContainer
            className="p-3"
            position={'top-center'}
            style={{ zIndex: 1 }}
          >
            <Toast>
              <Toast.Header>
                <strong className="me-auto">Error</strong>
                {/* <small>11 mins ago</small> */}
              </Toast.Header>
              <Toast.Body>{formik.errors.general}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      )}
      <Form onSubmit={formik.handleSubmit} className="form rounded mt-1">
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik101"
            className="position-relative"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.firstName && !formik.errors.firstName}
              isInvalid={formik.touched.firstName && !!formik.errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.lastName && !formik.errors.lastName}
              isInvalid={formik.touched.lastName && !!formik.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik103"
            className="position-relative"
          >
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.age && !formik.errors.age}
              isInvalid={formik.touched.age && !!formik.errors.age}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.age}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik104"
            className="position-relative"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={formik.touched.email && !!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik105"
            className="position-relative"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.touched.password && !!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik106"
            className="position-relative"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={
                formik.touched.confirmPassword && !formik.errors.confirmPassword
              }
              isInvalid={
                formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="position-relative mb-3">
          <Form.Check
            required
            name="terms"
            label="Agree to terms and conditions"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.terms && !formik.errors.terms}
            isInvalid={formik.touched.terms && !!formik.errors.terms}
            feedbackTooltip
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.terms}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" disabled={formik.isSubmitting}>
          Submit form
        </Button>
      </Form>
    </div>
  )
}

export default LoginPageView
