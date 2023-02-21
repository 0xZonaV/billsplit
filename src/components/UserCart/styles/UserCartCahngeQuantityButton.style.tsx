import styled from "styled-components";
import {TableCell} from "@mui/material";

export const NumberOfItemsInCart = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 17px;
  
  margin-top: 2px;
  
  
  color: #000000;
`

export const AddItemInCart = styled.div`
  background: #1A9C4A;
  border-radius: 14px;
  width: 22px;
  height: 22px;
  
  margin-right: 5px;

  font-size: 18px;
  line-height: 18px;

  border: 0;

  align-items: center;
  display: flex;
  justify-content: center;
  
  color: #FFFFFF;
`

export const DecreaseItemInCart = styled.div`
  background: #1A9C4A;
  border-radius: 14px;
  width: 22px;
  height: 22px;

  font-size: 15px;
  line-height: 18px;

  border: 0;

  align-items: center;
  display: flex;
  justify-content: center;
  
  color: #FFFFFF;
`

export const TableButtonAndNumberStyle = styled(TableCell)`
  && {
    font-family: 'Doloman Pavljenko';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    border: 0;
    color: #33394B;
    padding: 16px 10px 17px 10px;
  }
`