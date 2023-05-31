import { darken } from "polished";
import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 20px;
`;

interface ISearchContainer {
  breakpoint: boolean;
}

export const SearchContainer = styled.div<ISearchContainer>`
  display: flex;
  flex-direction: ${(props) => (props.breakpoint ? "column" : "row")};
`;

export const SearchBar = styled.div<ISearchContainer>`
  display: flex;
  width: ${(props) => (props.breakpoint ? "100%" : "60%")};
`;

export const FilterContainer = styled.div`
  margin: 16px 8px;
  color: ${(props) => props.theme.palette.primary.main};
  /* height: 17px; */
  svg {
    height: 17px;
    width: 17px;

    transition: 1s;
  }

  :hover {
    cursor: pointer;
    color: ${(props) => darken(0.2, props.theme.palette.primary.main)};
  }
`;

export const FilterOpenedContainer = styled.div`
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: appear 1s ease;

  /* border: 1px solid red; */
  /* margin: 16px 0px; */
`;
