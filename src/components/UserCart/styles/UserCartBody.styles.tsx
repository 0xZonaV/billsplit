import styled from "styled-components";
import {Grid, TableCell, TableRow} from "@mui/material";
import BillBackground from "../../../../public/BillBackGround.svg"

export const UserCartBodyBox = styled.div`

    margin-left: 25px;
    margin-right: 25px;
    align-items: flex-start;
    display: flex;
    justify-content: center;
`

export const UserCartBodyBackground = styled.div`
    background-image: url("/BillBackGround.svg");
    background-repeat: no-repeat;
    background-position: center;
  
    height: 412px;
    width: 316px;
    margin-top: 10%;

    align-items: flex-start;
    display: flex;
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