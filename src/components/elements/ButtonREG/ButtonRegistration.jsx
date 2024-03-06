import React from "react";
import { ButtonREG } from "./ButtonRegistration.styled";

export const ButtonRegistration = ({title, name, disabled}) => {
    return (
    <ButtonREG title={title} disabled={disabled}>{name}</ButtonREG>)
}