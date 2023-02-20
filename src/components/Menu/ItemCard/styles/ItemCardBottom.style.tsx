import styled from "styled-components";
import {Grid, Typography} from "@mui/material";

export const ItemCardBottomGrammar = styled(Grid)`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 17px;

  color: #000000;
`

export const ItemCardBottomGrammarBox = styled.div`
  display: inline-block;
`

export const ItemCardBottomPRiceBox = styled(Grid)`
  display: block;
`

export const ItemCardBottomPrice = styled(Typography)`
  && {
    font-family: 'Buyan';
    font-style: normal;
    font-weight: bolder;
    font-size: 40px;
    line-height: 44px;
    align-items: center;
    display: inline-block;

    color: #F29662;
  }
`

export const ItemCardBottomCurrency = styled(Typography)`
  && {
    font-family: 'Buyan';
    font-style: normal;
    font-weight: bolder;
    font-size: 32px;
    line-height: 35px;
    align-items: center;
    display: inline-block;
    
    margin-left: 4px;
    
    color: #F29662;
  }
`