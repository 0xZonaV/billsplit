import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: rgba(104, 104, 104, 1);
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 177px;
  height: 177px;
  padding: 20px;
  background: #7BB889;

  aspect-ratio: 1;
  border-radius: 50%;
  --_m: conic-gradient(#0000, #000),
  linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  box-sizing: border-box;

  -webkit-animation: load 1.2s linear infinite;

  @keyframes load {
    to {
      -webkit-transform: rotate(360deg)
    }
  }

`;
