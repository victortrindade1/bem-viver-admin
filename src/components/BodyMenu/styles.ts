import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoreButtonContainer = styled.div`
  position: absolute;
  right: 27px;
  top: 53px;

  svg {
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  height: 80px;
  width: 80px;
  background-color: #fff;
  margin: 7px;
  box-shadow: -5px 5px 20px 0px #00000040;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.primary.dark};

  svg {
    color: ${(props) => props.theme.palette.primary.dark};
    margin-bottom: 3px;
  }

  font-family: "Fredoka";
  font-size: 11px;

  :hover {
    cursor: pointer;
  }
`;

export const LabelContainer = styled.div``;
