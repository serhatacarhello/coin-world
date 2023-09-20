import * as Yup from 'yup'
import LoginPageView from './LoginPageView'
import { useNavigate } from 'react-router-dom'

export default function LoginPageController() {
  let validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    age: Yup.number()
      .required('Age is required')
      .positive()
      .min(18, 'Under 18 is not permitted')
      .max(100, 'Over 100 is not allowed'),
    password: Yup.string()
      .required('Password is required')
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!+@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character'
      )
      .matches(/^\S*$/, 'White Spaces are not allowed')
      .min(8, ({ min }) => `Password must be at least ${min} characters`),

    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
    terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
  })

  //   password: Yup.string()
  //     .required('Required')
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  //     ),
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
    terms: false,
  }

  const navigate = useNavigate()
  return (
    <LoginPageView
      validationSchema={validationSchema}
      initialValues={initialValues}
      navigate={navigate}
    />
  )
}
