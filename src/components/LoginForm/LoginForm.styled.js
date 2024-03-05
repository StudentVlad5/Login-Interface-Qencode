import theme from "components/baseStyles/Variables.styled";
import styled from "styled-components";
import { Field } from "formik";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  padding-top: 80px;
`;
export const Title = styled.h1`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.extra30};
  font-style: normal;
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0;
  text-transform: none;
  padding-bottom: 40px;
`;
export const BtnContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 16px;
`;
export const OrContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 16px;
  margin: 30px 0;
`;
export const OrLine = styled.div`
  position: absolute;
  top: 50%;
  display: block;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.borders};
`;
export const OrTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.extrasmall12};
  font-style: normal;
  font-family: ${theme.fonts[0]};
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0;
  text-transform: none;
  background-color: ${theme.colors.white};
  z-index: 20;
`;
export const ErrorBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: -5px;
  left: 15px;
  margin-bottom: -16px;
  color: #e53e3e;

  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small14};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.03em;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    left: 32px;
  }
`;

export const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;

  cursor: pointer;

  & svg {
    width: inherit;
    height: inherit;
  }
`;

export const Input = styled(Field)`
  display: flex;
  width: 100%;
  padding: 14px 12px;
  position: relative;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${theme.colors.borders};
  box-sizing: border-box;
  align-items: center;
  border-radius: 6px;
  justify-content: flex-start;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.small15};
  font-style: normal;
  font-family: ${theme.fonts[0]};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-transform: none;
  &:placeholder {
    color: ${theme.colors.inputText};
  }
`;
export const SubMessageLeft = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;
export const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.blue};
  font-size: ${theme.fontSizes.small14};
  font-style: normal;
  text-align: right;
  font-family: ${theme.fonts[0]};
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 0;
  letter-spacing: 0;
  text-transform: none;
`;
export const SubMessageCentre = styled(SubMessageLeft)`
  justify-content: center;
  margin-bottom: 0px;
  margin-top: 20px;
`
export const Subtitle = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.extrasmall12};
  line-height: 16px;
  letter-spacing: 0;
  padding: 0 4px;
`