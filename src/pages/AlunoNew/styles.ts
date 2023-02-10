import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div`
  @media (min-width: ${media.smallUp}) {
    max-width: 400px;
    margin: 30px;
  }

  @media (min-width: ${media.mediumUp}) {
    max-width: 400px;
  } ;
`;

export const IdadeContainer = styled.div`
  display: flex;
  flex-direction: row;
  > div:nth-child(2) {
    margin-left: 30px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PreMatriculaContainer = styled.div``;

export const PreLinkButton = styled.div`
  margin-top: 10px;
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: underline;
  width: fit-content;
  :hover {
    cursor: pointer;
  }
`;
