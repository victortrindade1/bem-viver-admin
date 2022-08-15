import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: calc(100vh - 215px);
  background-color: #fff;
  margin: 0 15px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 1px 5px rgba(101, 104, 114, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 1px 5px rgba(101, 104, 114, 0);
`;
