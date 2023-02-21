import styled from "styled-components";

export const UserFinalBillTipBackground = styled.div`
  background: rgba(99, 99, 99, 0.5);
  border: 1px solid #000000;
  display: flex;
  justify-content: center;
  padding-top: 60%;
  width: 100vw;
  height: 100vh;
`

export const UserFinalBillAgreePopup = styled.div`
  width: 321px;
  height: 178px;

  background: #EBEFF3;
  border-radius: 15px;
  display: inline-block;
  justify-content: center;
`

export const UserFinalBillAgreePopupTitle = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 31px;
  display: flex;
  margin-top: 30px;
  justify-content: center;

  color: #33394B;
`

export const UserFinalBillAgreePopupButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 45px 0 45px;
  margin-top: 30px;
`

export const UserFinalBillSummEnterLine = styled.div`
  border: 2px solid #39C047;

  
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`

export const UserFinalBillSummHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserFinalBillSummTextArea = styled.input`
  resize: none;
  border-radius: 15px;
  background: white;
  border: 0;
  &:focus {
    outline: none !important;
    border: 0;
    box-shadow: none;
  }

  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 47px;

  ::placeholder{
    display: flex;
    text-align: center;
    color: rgba(7, 7, 7, 0.29);
  }

`

