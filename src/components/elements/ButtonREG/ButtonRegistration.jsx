import React from "react";
import { ButtonREG } from "./ButtonRegistration.styled";

export const ButtonRegistration = ({type, title, name, disabled}) => {
    return (
    <ButtonREG type={type} title={title} disabled={disabled}>{name}</ButtonREG>)

}