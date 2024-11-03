import {Component} from 'react'
import {IoMdHome} from 'react-icons/io'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {MainContainer, NavBar, LogoImage, NavItems} from './StyledComponents'

class Home extends Component {
  render() {
    return (
      <MainContainer>
        <NavBar>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <NavItems>
            <IoMdHome />
            <BsFillBriefcaseFill />
            <FiLogOut />
          </NavItems>
        </NavBar>
      </MainContainer>
    )
  }
}

export default Home
