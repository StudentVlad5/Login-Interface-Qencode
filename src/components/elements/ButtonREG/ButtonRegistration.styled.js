import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const ButtonREG = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 13px;
    min-height: 22px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 0;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.small16};
    font-style: normal;
    font-family: ${theme.fonts[0]};
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0;
    text-transform: none;
    max-width: 400px;
    border-radius: 8px 8px 8px 8px;
    background-color: ${theme.colors.blue};
    cursor: pointer;
    border: none;
    &:disabled {
      opacity: 0.6;
    }
  `;