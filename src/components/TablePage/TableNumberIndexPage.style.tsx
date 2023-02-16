import styled from "styled-components";
import {Button} from "@mui/material";

export const TableNumberIndexPageStyle = styled.div`
  font-family: 'Buyan';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 52px;
  
  text-transform: capitalize;
  align-content: center;
  
  margin-top: 80%;
  
  color: #000000;
`
export const GoogleSignInButton = styled(Button)`
    && {
      background: linear-gradient(89.74deg, #BADCFF 8.19%, #ACB4FF 120.64%);
      border-radius: 9px;
      width: 304.6px;
      height: 54px;
      
      margin-top: 25%;

      text-decoration: none;
      white-space: nowrap;
      display: block;
      
      font-family: 'Doloman Pavljenko';
      font-style: normal;
      font-weight: 300;
      font-size: 22px;
      text-transform: none;

      color: #6F778D;
    }

  & .MuiButton-startIcon{
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }
`