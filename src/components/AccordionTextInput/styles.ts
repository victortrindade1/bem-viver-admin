import styled from "styled-components";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export const AccordionStyled = styled(Accordion)`
  margin: 0;
  box-shadow: none;

  :before {
    background-color: #ffffff00;
  }
`;

export const AccordionSummaryStyled = styled(AccordionSummary)`
  padding: 0;

  > div {
    margin: 0;
  }
  > div + div {
    position: absolute;
    right: -20px;
  }

  // Tirar o cinza qnd seleciona TextInput dentro do accordion
  &.Mui-focusVisible {
    background-color: inherit;
  }

  > div {
    &.Mui-expanded {
      margin: 0;
    }
  }
`;

export const AccordionDetailsStyled = styled(AccordionDetails)`
  padding: 0;
`;
