import styled from "styled-components";
import {Button, Grid} from "@mui/material";

export const HowToModuleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  height: 100%;
`

export const HowToVisibleBox = styled.div`
  height: 88.98%;
  width: 100%;
`

export const HowToUpperBox = styled.div`
  height: 50%;
  background: linear-gradient(122.11deg, #1F5F5B 0%, #3DAC5E 109.42%);
  border-radius: 29px 29px 0 0;
  padding: 27px 27px 0 27px;
  display: flex;
  flex-direction: column;
  overflow: visible;
  position: relative;
`
export const HowToBottomBox = styled.div`
  height: 50%;
  background: #F1F1F1;
  border-radius: 0 0 29px 29px;
  padding: 22px 27px;
  
`

export const HowToCloseButton = styled(Grid)`
  &&{
    font-family: 'Doloman Pavljenko';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 23px;
    color: white;
  }
`

export const HowToProgress = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const HowToImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  overflow: visible;
`

export const HowToTitle = styled.div`
  font-family: 'Buyan';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;

  color: #33394B;

`

export const HowToText = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  margin-top: 20px;
  color: #000000;

`

export const HowToNextButton = styled(Button)`
  &&{
    background: linear-gradient(90.57deg, #159947 11.37%, #159947 92.16%) ;
    border-radius: 12px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 19px;
    gap: 10px;

    width: 259px;
    height: 56px;
    
    font-family: 'Buyan';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;

    color: #FFFFFF;
  }
`

export const HowToNextButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`