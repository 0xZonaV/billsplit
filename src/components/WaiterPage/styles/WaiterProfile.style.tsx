import styled from "styled-components";
import Image from "next/image";
import {Table, TableCell, TableContainer, Typography} from "@mui/material";

export const WaiterProfileImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`

export const WaiterProfileTitle = styled.div`
  font-family: 'Buyan';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 39px;
  color: #51C644;
`

export const WaiterProfilePageBox = styled.div`
  width: 354px;
  max-width: 354px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const WaiterProfileBox = styled.div`
  display: flex;
  justify-content: center;
`

export const WaiterProfileImageAndTextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 20px;
`

export const WaiterProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const WaiterProfileInfoText = styled(Typography)`
  && {
    font-family: 'Doloman Pavljenko';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
  }
`

export const WaiterProfileFooter = styled.div`
  position: fixed;
  padding: 0 10px 0 10px;
  bottom: 0;
  width: 100%;
  align-items: center;
  height: 90px;
  background: #FFF;
`

export const WaiterFooterButtonsBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px 0 45px;
`

export const WaiterWorkDaysTableContainer = styled(TableContainer)`
  && {
    width: 353px;
    height: 419px;
    background: #FFFFFF;
    border-radius: 14px;
    margin-top: 35px;
    justify-content: center;
    display: flex;
    align-items: flex-start;
    max-height: 419px;
  }
`

export const WaiterWorkDaysTable = styled(Table)`
  && {
    table-layout: fixed;
    overflow: hidden;
    justify-content: center;
  }
`

export const WaiterWorkDaysHeaderCell = styled(TableCell)`
  && {
    font-family: 'Buyan';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: #33394B;
    padding: 16px 5px 16px 5px;

    border-bottom: 3px dashed #EBEFF3;
  }
`

export const WaiterWorkDaysBodyCell = styled(TableCell)`
  && {
    text-align: center;
    padding: 16px 5px 16px 5px;
    font-family: 'Doloman Pavljenko';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    color: #000000;

    border-bottom: 3px dashed #EBEFF3;
  }
`

export const WaiterWorkDaysDateCell = styled(TableCell)`
  && {
    font-family: 'Doloman Pavljenko';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    text-align: center;

    color: #B84200;
    width: 109px;
    border-bottom: 3px dashed #EBEFF3;
    padding: 5px;
  }
`