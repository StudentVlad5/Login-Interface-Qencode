import React, { useState } from 'react';
import { useFormik, Formik, Form } from 'formik';
import schemas from 'services/schemas';
import { FormContainer, Title, ErrorBox,  Input } from '../LoginForm/LoginForm.styled';


import theme from 'components/baseStyles/Variables.styled';
import { ButtonRegistration } from 'components/elements/ButtonREG/ButtonRegistration';
import { BtnCancel } from './ForgotPasswordForm.styled';
import { forgotPassword } from 'services/auth';



export const ForgotPasswordForm = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  
  const onSubmit = values => {
    setIsLoading(true);
    const { email } = values;
    forgotPassword({email});
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schemas.changePasswordSchema,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    formik.values.email === ''
      ? true
      : false;


  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.red}`
      : `${theme.colors.green}`;
  };

  return (
<FormContainer>
  <Title>Forgot Password?</Title>
    <Formik validationSchema={schemas.changePasswordSchema}>
          <Form style={{width:"100%", display:"flex", flexDirection:"column", gap:"25px", marginBottom:"15px"}} onSubmit={formik.handleSubmit} autoComplete="off">
              <div style={{width:"100%", position:"relative"}}>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.email,
                      formik.errors.email,
                    ),
                  }}
                  name="email"
                  type="email"
                  validate={schemas.schemasLogin.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  placeholder='Enter your email'
                />
                {formik.errors.email || formik.touched.email ? (
                  <ErrorBox>{formik.errors.email}</ErrorBox>
                ) : null}
              </div>

              <ButtonRegistration type="submit" disabled={isValid} aria-label='Forgot Password' title ={'Forgot Password'} name={isLoading ? 'Loading' : "Send"}/>
              
              <BtnCancel type="reset"  aria-label='Cancel Button' title ='Cancel Button' onClick={e => formik.resetForm()}>Cancel</BtnCancel>

          </Form>
      </Formik>
</FormContainer>
  );
};
