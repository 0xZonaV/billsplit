import styled from "styled-components";
import Image from "next/image";
import {Typography} from "@mui/material";
export const ItemCardImageStyle = styled(Image)`
  border-radius: 9px;
  transform: matrix(1, 0, 0, 1, 0, 0);
`

export const ItemCardDescription = styled(Typography)`
    && {
      font-family: 'Doloman Pavljenko';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;

      color: #000000;
    }
`