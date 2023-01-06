import styled from "styled-components";

export const CarouselItem = styled.div`
  background: orange;
  height: 515px;
  width: 483px;
  border-radius: 25px;

  > p {
    position: relative;
    left: 40px;
    bottom: -432px;
    font-family: Manrope;
    font-size: 24px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    text-decoration: underline;
  }
`

export const CarouselButtonContainer = styled.div`
  position: relative;
  top: 35%;
  width: 100%;
  display: flex;
  justify-content: center;
  > .carousel-button-left {
    left: -44%;
  }

  > .carousel-button-right {
    right: -44%;
  }

`
export const CarouselButton = styled.div`
  position: relative;
  background-color: white;
  width: 66px;
  height: 66px;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CarouselBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;

  > .carousel-bar-background {
    background: rgba(58, 73, 90, 1);
    height: 10px;
    width: 393px;
  }
`

export const CarouselSeekBar = styled.div`
  background: white;
  width: 16%;
  height: inherit;
  float: right;
`