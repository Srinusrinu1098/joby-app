import styled from 'styled-components/'

export const MainContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 577px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
`
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
`
export const LogoImage = styled.img`
  width: 80px;
`
export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 36%;
  @media (min-width: 577px) {
    display: none;
  }
`
