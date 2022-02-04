import styled from "styled-components";
import { Menu } from "..//Menu";
import TelosLogo from "../SVG/telos_letter_logo.svg";



const NavBarSection = styled.div`
    width: 100vw;
    height: 100px;
    background: #4b0082;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    
`;

const Image = styled.img`
    width: 100px;
    height: auto;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
        padding-left: 40px;
    }
    @media screen and (max-width: 460px){
        padding-left: 25px;
    }
`;

const NavBar = () => {
    return(
        <NavBarSection>
            <Image src={TelosLogo} alt="" />
            <Menu />
        </NavBarSection>
    )
}

export default NavBar;