import styled from "styled-components";
import {TableCell} from "@mui/material";

export const UserFinalBillFormBox = styled.div`
  padding: 20% 10% 0 10%;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: visible;
`

export const UserFinalBillFormHeader = styled.div`
  font-family: 'Buyan', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 34px;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #33394B;
`

export const UserFinalBillChooseButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const UserFinalBillChooseButton = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;

  display: flex;
  padding: 5% 0 0 0;
  color: #33394B;
`

export const UserFinalBillChooseButtonFocused = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;

  display: flex;
  padding: 5% 0 10px 0;
  color: #33394B;
  border-bottom: 3px solid #51B462;
  
  animation: borderAnim 0.5s ease-in-out;
  
  @keyframes borderAnim {
    0% {
      border-bottom: 3px solid #EBEFF3;
    }
    
    100% {
      border-bottom: 3px solid #51B462;
    }
  }
  
`

export const UserFinalBillBackground = styled.div`
    background-image: url("/FinalBillBackground.svg");
    background-repeat: no-repeat;
    background-position: center;
  
    height: 252px;
    width: 334px;
    margin-top: 10%;

    align-items: flex-start;
    display: block;
    justify-content: center;
  
`

export const FinalBillCellText = styled(TableCell)`
  && {
    font-family: 'Doloman Pavljenko';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 23px;
    border: 0;
    color: #33394B;
  }
`

export const UserFinalBillTotalCost = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  border: 0;
  color: #33394B;
  justify-content: left;
  display: flex;

  padding: 0 0 0 30px;
`

