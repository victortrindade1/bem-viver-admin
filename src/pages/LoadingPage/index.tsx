import React from "react";

import { Container, LoadingContainer, Loading } from "./styles";

const LoadingPage: React.FC = () => {
  return (
    <Container>
      <LoadingContainer>
        <Loading>
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </Loading>
      </LoadingContainer>
    </Container>
  );
};

export default LoadingPage;
