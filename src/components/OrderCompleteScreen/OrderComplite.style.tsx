import styled from "styled-components";

export const OrderCompletedBackground = styled.div`
  background: linear-gradient(165.97deg, #364366 15.25%, #38F161 102.2%);
  background-size: 150% 150%;
  height: 100vh;
  width: 100vw;
  animation: gradient-animation 8s ease infinite;


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