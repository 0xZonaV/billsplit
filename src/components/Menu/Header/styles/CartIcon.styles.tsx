import ShoppingBag from "../../../../../public/ShopingBag.svg";
import styled from "styled-components";
import {Grid} from "@mui/material";

export const ShoppingBagIcon = styled(ShoppingBag)`

`

export const SearchIconContainer = styled(Grid)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackButtonEllipse = styled.div`
  width: 45px;
  max-width: 45px;
  height: 45px;
  position: relative;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #51C644;
`

export const ShoppingBagContainer = styled(Grid)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ShoppingBagItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 9px;
  
  font-family: 'Buyan';
`