import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const StandartBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 15px;
    min-height: 22px;
    text-align: center;
    cursor: pointer;
    gap: 10px;
    overflow: hidden;
    position: relative;
    max-width: 192px;
    border: 1px solid ${theme.colors.borders};
    box-sizing: border-box;
    border-radius: 6px;
    background-color: ${theme.colors.white};
  `;

  export const BtnName = styled.span`
    color: ${theme.colors.btnName};
    font-size: ${theme.fontSizes.small14};
    font-style: normal;
    text-align: left;
    font-family: ${theme.fonts[0]};
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-transform: none;
  `;