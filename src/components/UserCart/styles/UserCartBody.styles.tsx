import styled from "styled-components";
import {TableCell} from "@mui/material";


export const UserCartBodyBackground = styled.div`
    background-image: url("/UserCartBillBackground.svg");
    background-repeat: no-repeat;
    background-position: center;
  
    height: 285px;
    width: 341px;
    margin-top: 10%;

    align-items: flex-start;
    display: block;
    justify-content: center;
  
`

export const TableTextStyle = styled(TableCell)`
  && {
    font-family: 'Doloman Pavljenko';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    border: 0;
    color: #33394B;
    padding: 16px 3px 17px 3px;
  }
`

export const TotalCost = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  border: 0;
  color: #33394B;
  justify-content: left;
  display: flex;
  
  padding: 0 0 0 35px;
`