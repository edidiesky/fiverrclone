
import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    username:yup
    .string()
    .min(4, 'Please enter your full name')
    .required('Required'),
    email:yup
    .string()
    .email('Please enter your email')
    .required('Required')
})
