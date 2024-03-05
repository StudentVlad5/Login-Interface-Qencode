import React, { useState } from 'react';
import { useFormik, Formik, Form } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import schemas from 'services/schemas';
import { FormContainer, OrContainer, OrLine, OrTitle, Title, ErrorBox,  ShowPassword, Input,  LinkTo, SubMessageLeft, SubMessageCentre, Subtitle, BtnContainer} from './LoginForm.styled';
import { StandartButton } from 'components/elements/StandartButton/StandartButton';
import { ReactComponent as IconGoogle} from 'images/svg/icon_google.svg';
import { ReactComponent as IconGit} from 'images/svg/icon_git.svg';
import theme from 'components/baseStyles/Variables.styled';
import { ButtonRegistration } from 'components/elements/ButtonREG/ButtonRegistration';



export const LoginForm = () => {
  
  const [isShown, setIsShown] = useState(true); 
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
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
      email: '',
      password: '',
    },
    validationSchema: schemas.schemasLogin,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    formik.values.email === ''
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
  <Title>Log in to your account</Title>
  <BtnContainer>
    <StandartButton type={"button"} ariaLabel='Login with Google' title ={'Login with Google'} name={"Google"} logo={<IconGoogle/>}>
    </StandartButton>
    <StandartButton type={"button"} ariaLabel='Login with Git' title ={'Login with Git'} name={"Git"} logo={<IconGit/>}>
    </StandartButton>
  </BtnContainer>
  <OrContainer>
      <OrLine/>
      <OrTitle>OR</OrTitle>
  </OrContainer>
    <Formik validationSchema={schemas.schemasLogin}>
          <Form style={{width:"100%", display:"flex", flexDirection:"column", gap:"25px", marginBottom:"15px"}} onSubmit={formik.handleSubmit} autoComplete="off">
            {isShown && (
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
                  placeholder='Work email'
                />
                {formik.errors.email || formik.touched.email ? (
                  <ErrorBox>{formik.errors.email}</ErrorBox>
                ) : null}
              </div>
            )}

            {!formik.errors.email && formik.values.email && (
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
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  placeholder='Password'
                />

                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.password && formik.touched.password ? (
                  <ErrorBox>{formik.errors.password}</ErrorBox>
                ) : null}
              </div>
            )}
          </Form>
        </Formik>
        {!formik.errors.email && formik.values.email && <SubMessageLeft><LinkTo to="/forgot_password">Forgot your password?</LinkTo></SubMessageLeft>}
        <ButtonRegistration type="submit" disabled={isValid} ariaLabel='Log in to Qencode' title ={'Log in to Qencode'} name={"Log in to Qencode"}/>
        <SubMessageCentre>
        <Subtitle>Is your company new to Qencode?</Subtitle> <LinkTo to="/signup">Sign up</LinkTo>
        </SubMessageCentre>
</FormContainer>
  );
};
