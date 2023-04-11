import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { lighten } from "polished";

export const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const MoreButtonContainer = styled.div`
  position: absolute;
  right: 6vw;
  top: 53px;

  svg {
    color: #fff;
  }
`;

export const NavLinkStyled = styled(NavLink)`
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

  &.active {
    background-color: ${(props) =>
      lighten(0.15, props.theme.palette.primary.main)};
    color: ${(props) => lighten(0.15, props.theme.palette.primary.dark)};

    svg {
      color: ${(props) => lighten(0.15, props.theme.palette.primary.dark)};
    }

    cursor: default !important;
  }

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

export const LabelContainer = styled.div`
  text-align: center;
`;

export const TrashContainer = styled.div`
  margin-top: auto;
  color: #00000050;
  /* align-self: flex-end; */
  /* justify-self: flex-end; */
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.palette.warning.main};
    transition: color 0.5s;
  }

  font-family: "Fredoka";
  font-size: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
