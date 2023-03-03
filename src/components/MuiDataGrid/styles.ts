import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 5px 0px 5px;
  padding-bottom: 40px;

  && .MuiDataGrid-columnHeaderTitle {
    font-weight: bold;
  }

  // ###### Congelar header #######
  && .MuiDataGrid-columnHeaders {
    position: sticky;
    background-color: ${(props) => props.theme.palette.secondary.main};
    // Display header above grid data, but below any popups
    z-index: 1;
  }
  && .MuiDataGrid-virtualScroller {
    // Undo the margins that were added to push the rows below the previously fixed header
    margin-top: 0 !important;
  }
  && .MuiDataGrid-main {
    // Not sure why it is hidden by default, but it prevented the header from sticking
    overflow: visible;
  }
  && .MuiDataGrid-row {
    cursor: pointer;
  }
`;
