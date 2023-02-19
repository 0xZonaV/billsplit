import styled from "styled-components";

export const OrderCompletedBackground = styled.div`
  background: linear-gradient(165.97deg, #364366 15.25%, #38F161 102.2%);
  background-size: 150% 150%;
  height: 100vh;
  width: 100vw;
  animation: gradient-animation 8s ease infinite;
  display: flex;
 
  align-items: center;
  flex-direction: column;


@keyframes gradient-animation {
  0% {
    background-position: 10% 0;
  }
  50% {
    background-position: 30% 30%;
  }
  100% {
    background-position: 10% 0;
  }
}
`

export const OrderCompleteText = styled.div`
  font-family: 'Buyan';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 39px;
  text-align: center;
  
  display: flex;
  
  inline-size: 217px;
  
  text-transform: uppercase;

  color: #FFFFFF;
`

export const OrderCompleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50%;
  flex-direction: column;
`


export const SeeYouLaterText = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 11px;
  display: block;

  color: #33394B;
  background: linear-gradient(90.25deg, #B0BFFF 14.28%, #B59BFF 81.95%);
  border-radius: 15px;
  
  animation: openText 2s ease-in-out;
  
  @keyframes openText {
    0% {
      width: 0;
    }
    
    100% {
      width: 100%;
    }
  }
  
`