import * as yup from 'yup';
const Schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
  acceptTerms: yup.boolean().oneOf([true]),
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
});

export { Schema, loginSchema };
