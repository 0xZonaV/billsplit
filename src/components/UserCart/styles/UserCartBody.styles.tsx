import styled from "styled-components";
import {TableCell} from "@mui/material";


export const UserCartBodyBackground = styled.div`
    background-image: url("/BillBackGround.svg");
    background-repeat: no-repeat;
    background-position: center;
  
    height: 412px;
    width: 316px;
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
  }
`

export const TotalCost = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  border: 0;
  color: #33394B;
  justify-content: left;
  display: flex;
  
  padding: 0 0 0 60px;
`