import ShoppingBag from "../../../../../public/ShopingBag.svg";
import styled from "styled-components";
import {Grid} from "@mui/material";

export const ShoppingBagIcon = styled(ShoppingBag)`

`

export const SearchIconContainer = styled(Grid)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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