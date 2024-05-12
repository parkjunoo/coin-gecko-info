import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  /* Your CSS styles here */
  .dimmed {
    position: absolute;
    opacity: 0.5;
    pointer-events: none;
    background: black;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .loader-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    .loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite;
    }
    .loader::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid #fff;
      animation: prixClipFix 2s linear infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes prixClipFix {
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
    }
  }
`;

const loadingSpinner = styled.div``;

export default Container;
