import styled from "styled-components";
import Image from "next/image";
export const WaiterCardBox = styled.div`
  background: #FFFFFF;
  border-radius: 15px;

  width: 100%;
  height: 100%;
  
  align-items: center;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
`

export const WaiterAvatarImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  margin-left: 25px;
`

export const WaiterName = styled.div`
  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #33394B;
`

export const CallWaiterButton = styled.button`
  background: #6BC159;
  border-radius: 15px;
  border: 0;
  width: 99px;
  height: 28px;
  
  margin-right: 33px;
  
  text-align: center;

  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  animation: toCheck1 1s ease-in-out;

  @keyframes toCheck1 {
    0% {
      width: 30px;
      color: #6BC159;
    }

    100% {
      width: 99px;
      color: #FFFFFF;
    }
  }

`

export const CallWaiterButtonPressed = styled.button`
  background: #6BC159;
  border-radius: 15px;
  border: 0;
  width: 28px;
  height: 28px;
  
  margin-right: 33px;
  
  text-align: center;

  font-family: 'Doloman Pavljenko';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFFFFF;
  
  animation: toCheck 1s ease-in-out;
  
  @keyframes toCheck {
    0% {
      width: 99px;
      color: #6BC159;
    }
    
    100% {
      width: 28px;
      color: #FFFFFF;
    }
  }

`