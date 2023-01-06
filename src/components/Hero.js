import styled from "styled-components"

export const HeroPage = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 613px;
  margin-top: 100px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const HeroText = styled.p`
  color: white;
  width: 430px;
  font-family: Manrope;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: underline;
`
export const HeroHeading  = styled.h1`
  font-family: "Nulshock";
  font-size: 41px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  height: 48px;
  width: 522px;
  color: #2E9DAA;
  margin: 50px auto;
`
export const HeroButton = styled.button`
  border: 2px solid #2E9DAA;
  height: 45px;
  width: 170px;
  border-radius: 30px;
  background: none;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
`