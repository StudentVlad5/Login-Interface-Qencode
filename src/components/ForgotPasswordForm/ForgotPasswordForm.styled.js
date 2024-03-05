import styled from "styled-components";

import theme from "components/baseStyles/Variables.styled";
import { ButtonREG } from "components/elements/ButtonREG/ButtonRegistration.styled";

export const BtnCancel = styled(ButtonREG)`
color: ${theme.colors.black};
background-color: ${theme.colors.white};
border: 1px solid ${theme.colors.grey}
`;
