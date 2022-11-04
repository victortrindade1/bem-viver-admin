import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
} from "./styles";

interface IAccordionTextInput {
  children: [React.ReactNode, React.ReactNode];
}
const AccordionTextInput: React.FC<IAccordionTextInput> = ({ children }) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  return (
    <AccordionStyled expanded={accordionOpen}>
      <AccordionSummaryStyled
        expandIcon={
          <ExpandMoreIcon
            style={{ cursor: "pointer" }}
            onClick={() => setAccordionOpen(!accordionOpen)}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          cursor: "unset !important",
        }}
      >
        {children[0]}
      </AccordionSummaryStyled>
      <AccordionDetailsStyled>{children[1]}</AccordionDetailsStyled>
    </AccordionStyled>
  );
};

export default AccordionTextInput;
