import styled from 'styled-components';

export const Banner = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('img/banner.jpg');
  background-attachment: fixed;
  background-position: center -135px;
  background-size: cover;
  background-repeat: no-repeat;
  filter: contrast(100%);
  color: #fff;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
  }

  & * {
    z-index: 2;
  }

  & h2 {
    margin: 0 20px;
    text-align: center;
    font-size: clamp(2rem, 4vw, 4rem);
  }

  & p {
    text-align: center;
    font-size: clamp(1.5rem, 2vw, 3rem);
    width: 100%;
    margin: 50px 20px 0;
    border-top: 1px solid #ff8352;
    border-bottom: 1px solid #ff8352;
    padding: 20px;
  }
`;
