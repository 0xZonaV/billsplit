import styled from "styled-components";
import CloseButton from "../../../../public/CloseButtonIccon.svg";
export const UserCartPopupBox = styled.div`

  width: 320px;
  height: 501px;

  background: #EBEFF3;
  border-radius: 23px;

  justify-content: center;
  position: relative;
`

export const UserCartCloseButtonStyle = styled(CloseButton)`
  margin-top: 4%;
`

export const UserCartPopupText = styled.div`
  font-family: 'Buyan';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  inline-size: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10% 10% 0 25%;


  color: #33394B;
`


export const UserCartPopupTextAndCloseBox = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
`

export const UserCartPopupTextFieldBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 60%;
  padding: 30px 30px 0 30px;
  border: 0;

`

export const UserCartPopupTextField = styled.textarea`
  resize: none;
  height: 300px;
  width: 320px;
  border-radius: 9px;
  background: white;
  border: 0;
  &:focus {
    outline: none !important;
    border: 0;
    box-shadow: none;
  }
  
  padding: 10px;
  
`