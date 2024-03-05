import React, { useState } from 'react';
import { useFormik, Formik, Form } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import schemas from 'services/schemas';
import { FormContainer, Title, ErrorBox,  ShowPassword, Input} from '../LoginForm/LoginForm.styled';
import theme from 'components/baseStyles/Variables.styled';
import { ButtonRegistration } from 'components/elements/ButtonREG/ButtonRegistration';
import { BtnCancel } from './CreatePasswordForm.styled';
import { clearData } from 'services/localStorService';
import { useNavigate, useLocation  } from "react-router-dom";




export const CreatePasswordForm = () => {
  
  const [isShown, setIsShown] = useState(true); 
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const handleOut = (e) => {
    clearData();
    navigate('/')
  }
  
  const onSubmit = values => {
    setIsLoading(true);
    const { email, password } = values;
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
      password: '',
      confirmPassword: '',
    },
    validationSchema: schemas.updatePasswordSchema,
    onSubmit,
  });

  const isValid =
    (formik.errors.password && formik.touched.password && formik.errors.confirmPassword && formik.touched.confirmPassword) 
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.red}`
      : `${theme.colors.green}`;
  };

  return (
<FormContainer key={pathname}>
  <Title>Create new Password?</Title>
    <Formik validationSchema={schemas.updatePasswordSchema}>
          <Form style={{width:"100%", display:"flex", flexDirection:"column", gap:"25px", marginBottom:"15px"}} onSubmit={formik.handleSubmit} autoComplete="off">
            {isShown && (
              <div style={{width:"100%", position:"relative"}}>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.password,
                      formik.errors.password,
                    ),
                  }}
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  validate={schemas.updatePasswordSchema.password}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  placeholder='Password'
                />
                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.password || formik.touched.password ? (
                  <ErrorBox>{formik.errors.password}</ErrorBox>
                ) : null}
              </div>
            )}

              <div style={{width:"100%", position:"relative"}}>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.confirmPassword,
                      formik.errors.confirmPassword,
                    ),
                  }}
                  name="confirmPassword"
                  type={showPass ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  placeholder='Password'
                />

                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                  <ErrorBox>{formik.errors.confirmPassword}</ErrorBox>
                ) : null}
              </div>
          </Form>
        </Formik>

        <ButtonRegistration type="submit" disabled={isValid} ariaLabel='Reset Password' title ={'Reset Password'} name={"Reset Password"}/>
        <BtnCancel type="button"  ariaLabel='Log Out' title ='Log Out' onClick={handleOut}>Log Out</BtnCancel>
  
</FormContainer>
  );
};
