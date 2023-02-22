import styled from "styled-components";
import {Grid} from "@mui/material";

export const AppHeaderStyle = styled.div`
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
`

export const AppHeaderTitleStyle = styled(Grid)`
     && {
       font-family: 'Buyan', sans-serif;
       font-style: normal;
       font-weight: bold;
       font-size: 35px;
       line-height: 34px;
       display: flex;
       text-align: center;
       justify-content: center;
       align-items: center;
       color: #33394B;
     } ;
`