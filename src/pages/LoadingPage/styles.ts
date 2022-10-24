import styled from "styled-components";

interface ILoadingPage {
  transparent?: boolean;
}

export const Container = styled.div<ILoadingPage>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #aa96da;
  background-image: linear-gradient(45deg, #aa96da 0%, #c5fad5 100%);
  display: grid;
  place-items: center;
`;

export const LoadingContainer = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #f1f2f300;
`;

// Loading animated
export const Loading = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
  div {
    box-sizing: content-box;
  }
  > div > div {
    transform-origin: 100px 100px;
    animation: loading 3.0303030303030303s linear infinite;
    opacity: 0.8;
  }
  > div > div > div {
    position: absolute;
    left: 30px;
    top: 30px;
    width: 70px;
    height: 70px;
    border-radius: 70px 0 0 0;
    transform-origin: 100px 100px;
  }
  > div div:nth-child(1) {
    animation-duration: 0.7575757575757576s;
  }
  > div div:nth-child(1) > div {
    background: #aa96da;
    transform: rotate(0deg);
  }
  > div div:nth-child(2) {
    animation-duration: 1.0101010101010102s;
  }
  > div div:nth-child(2) > div {
    background: #c5fad5;
    transform: rotate(0deg);
  }
  > div div:nth-child(3) {
    animation-duration: 1.5151515151515151s;
  }
  > div div:nth-child(3) > div {
    background: #aa96da;
    transform: rotate(0deg);
  }
  > div div:nth-child(4) {
    animation-duration: 3.0303030303030303s;
  }
  > div div:nth-child(4) > div {
    background: #c5fad5;
    transform: rotate(0deg);
  }
`;
