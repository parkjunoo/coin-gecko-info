import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;

  .load-more {
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 5px 20px;
    border: 1px solid #000;
    border-radius: 5px;
    width: 100px;
    margin: 10px auto;
  }
  .table-filter {
    display: flex;
    justify-content: flex-end;
  }
  /* Your CSS styles here */
  .dimmed {
    position: fixed;
    opacity: 0.5;
    pointer-events: none;
    background: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .loader-spinner {
    position: fixed;
    top: calc(50% - 2.4rem);
    left: calc(50% - 2.4rem);
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const prixClipFix = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(
      50% 50%,
      0 0,
      100% 0,
      100% 100%,
      100% 100%,
      100% 100%
    );
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
`;

const Spinner = styled.span`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: ${prixClipFix} 2s linear infinite;
  }
`;

export default {
  Container,
  Spinner,
};
