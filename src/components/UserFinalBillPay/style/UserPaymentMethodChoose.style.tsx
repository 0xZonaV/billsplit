import styled from "styled-components";
import {Button, FormControlLabel, RadioGroup} from "@mui/material";
import CheckBoxIcon from "../../../../public/CheckBoxIcon.svg";
import CheckBoxCheckedIcon from "../../../../public/CheckBoxIconChecked.svg";
import CashIcon from "../../../../public/cashIcon.svg";
import PayByCardIcon from "../../../../public/PayByCardIcon.svg";
export const UserPaymentMethodChooseBox = styled.div`
  width: 310px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30%;
  align-items: center;
`

export const UserPaymentMethodChooseTitle = styled.div`
  font-family: 'Buyan';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  line-height: 39px;

  color: #33394B;
`

export const UserPaymentMethodChooseButtonsBox = styled(RadioGroup)`
  && {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    width: 300px;
    height: 116px;

    border: 2px solid #22A04F;
    border-radius: 13px;
  }
`

export const UserPaymentMethodRadioBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserPaymentMethodRadioIconCash = styled(CashIcon)`
  margin-bottom: 5px;
`

export const UserPaymentMethodRadioIconCard = styled(PayByCardIcon)`
  margin-bottom: 5px;
`

export const UserPaymentMethodRadio = styled(FormControlLabel)`
  && {
    
    width: 231px;
    height: 26px;
    display: flex;
    align-items: center;
    text-transform: none;
    justify-content: space-between;
    
    & .MuiFormControlLabel-label {
      font-family: 'Doloman Pavljenko';
      font-style: normal;
      font-weight: 300;
      font-size: 23px;
      line-height: 23px;
      color: #33394B;
      

    }
    
  }
`

export const RadioButtonUnCheckedIcon = styled(CheckBoxIcon)`
  height: 26px;
  width: 26px;
`



export const RadioButtonCheckedIcon = styled(CheckBoxCheckedIcon)`
  height: 26px;
  width: 26px;
`

export const UserPaymentMethodNextButton = styled(Button)`
  && {
    background:  linear-gradient(90.57deg, #4DB163 5.49%, #1E9E4D 99.5%);
    border-radius: 15px;
    font-family: Doloman Pavljenko;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: none;
    color: #FFFF;
    margin-top: 32px;
    width: 194px;
    height: 54px
  }
`