import React from "react";
import { StandartBtn, BtnName } from "./StandartButton.styled";

export const StandartButton = ({type, title, name, logo}) => {
    return (
    <StandartBtn type={type} title={title}>{logo}<BtnName>{name}</BtnName></StandartBtn>)

}