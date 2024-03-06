import React, { useContext, useState } from 'react';
import { useFormik, Formik, Form } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import schemas from 'services/schemas';
import { FormContainer, Title, ErrorBox,  ShowPassword, Input} from '../LoginForm/LoginForm.styled';
import theme from 'components/baseStyles/Variables.styled';
import { ButtonRegistration } from 'components/elements/ButtonREG/ButtonRegistration';
import { BtnCancel } from './CreatePasswordForm.styled';
import { clearData } from 'services/localStorService';
import { useNavigate  } from "react-router-dom";
import { StatusContext } from "components/ContextStatus/ContextStatus";
import { LogOut, changePassword } from 'services/auth';




export const CreatePasswordForm = () => {
  
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(StatusContext);

  const handleOut = (e) => {
    clearData();
    navigate('/');
    setAuth(null);
    LogOut();
  }
  
  const onSubmit = values => {
    setIsLoading(true);
    const { email, password } = values;
    const auth = changePassword({email, password});
    console.log("auth", auth)
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
<FormContainer>
  <Title>Create new Password?</Title>
    <Formik validationSchema={schemas.updatePasswordSchema}>
      <Form style={{width:"100%", display:"flex", flexDirection:"column", gap:"25px", marginBottom:"15px"}} onSubmit={formik.handleSubmit} autoComplete="off">
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

          <ButtonRegistration type="submit" disabled={isValid} aria-label='Reset Password' title ={'Reset Password'} name={isLoading ? 'Loading' : "Reset Password"}/>
      </Form>
    </Formik>

    <BtnCancel type="button"  aria-label='Log Out' title ='Log Out' onClick={handleOut}>Log Out</BtnCancel>
  
</FormContainer>
  );
};
