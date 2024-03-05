import React, { useState } from 'react';
import { useFormik, Formik, Form } from 'formik';
import schemas from 'services/schemas';
import { FormContainer, Title, ErrorBox,  Input } from '../LoginForm/LoginForm.styled';


import theme from 'components/baseStyles/Variables.styled';
import { ButtonRegistration } from 'components/elements/ButtonREG/ButtonRegistration';
import { BtnCancel } from './ForgotPasswordForm.styled';



export const ForgotPasswordForm = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  
  const onSubmit = values => {
    setIsLoading(true);
    const { email } = values;
    // dispatch(
    //   logIn({
    //     email,
    //     password,
    //   }),

    // );
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schemas.schemasLogin,
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
    <Formik validationSchema={schemas.schemasLogin}>
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

          </Form>
        </Formik>
      
        <ButtonRegistration type="submit" disabled={isValid} ariaLabel='Forgot Password' title ={'Forgot Password'} name={"Send"}/>
        <BtnCancel type="button"  ariaLabel='Cancel Button' title ='Cancel Button'>Cancel</BtnCancel>

</FormContainer>
  );
};
