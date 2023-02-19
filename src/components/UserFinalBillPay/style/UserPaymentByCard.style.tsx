import styled from "styled-components";
import Cleave from "cleave.js/react";

export const UserPaymentByCardBox = styled.div`
  width: 276px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30%;
`

export const UserPaymentByCardTitle = styled.div`
  font-family: 'Buyan';
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;

  color: #33394B;
  text-align: left;
  inline-size: 253px;
`

export const UserPaymentByCardForm = styled.form`
  width: 270px;
  margin-top: 30px;
`

export const UserPaymentByCardLabel =styled.label`
  display: block;
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;

  color: #000000;
  margin-bottom: 11px;
  
`

export const UserPaymentByCardInput = styled(Cleave)`
  width: 268px;
  height: 56px;

  background: #D9DEEE;
  border: 1px solid rgba(0, 0, 0, 0.2);

  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;

  color: rgba(0, 0, 0, 1);
  
  
  
  padding: 20px 22px;
  
  &:focus {
    outline: none !important;
    box-shadow: none;
    
    ::placeholder {
      visibility: hidden;
    }
    
  }
  
  ::placeholder {
    text-align: center;
  }
  
`

export const UserPaymentByCardLower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const UserPaymentByCardInputAndLabel = styled.div`
  display: inline-block;
`
