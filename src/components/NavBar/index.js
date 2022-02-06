import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";
import TelosLogo from "../SVG/telos_letter_logo.svg";
import { motion } from "framer-motion";
import {IconButton} from "@material-ui/core";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from "@mui/material";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HailIcon from '@mui/icons-material/Hail';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Nav = styled.div`
    height: 80px;
    width: 100%;
    background: ${props => props.theme.purple};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 100px;
    padding-left: 30px;
    @media screen and (min-width: 1100px){
        padding-left: 20px;
    }
`;

const StyledMenuIcon = styled(MenuIcon)`
    &&&{
        color: white;
        margin-right: 30px;
        @media screen and (min-width: 1100px){
            display: none;
        }
    }
`;

const StyledCloseIcon = styled(HighlightOffIcon)`
    &&&{
        color: white;
        transform: scale(1.2);
        @media screen and (min-width: 1100px){
            display: none;
        }
    }
`;

const StyledButton = styled(Button)`
    &&&{
        color: #ba55d3;
        font-size: 16px;
        border: 2px solid #ba55d3;
        padding: 5px 15px;
    }
`;

const SwitchIcon = styled.div`
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
       transform: scale(1.2);
       transition: 0.4s all ease;
   }
`;

const Burguer = styled(MenuIcon)`
    &&&{
        color: ${props => props.theme.text};
        @media screen and (min-width: 1100px){
            display: none;
        }
    }
`;

const Arrow = styled(KeyboardArrowDownIcon)`
    &&&{
        color: ${props => props.theme.text};
        cursor: pointer;
        
    }
`;

const Text = styled.h1`
    &&&{
        font-size: 20px;
        color: ${props => props.theme.text};
        padding: 0 5px 0px 10px;
        
    }
`;

const AboutIcon = styled(HelpCenterIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
    }
`;
const ExpIcon = styled(ExploreIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
    }
`;

const LearnIcon = styled(SchoolIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
    }
`;

const BuildIcon = styled(ConstructionIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
    }
`;

const BuyIcon = styled(StorefrontIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
    }
`;

const NavMenu = styled.div`
    display: inline-flex;
    align-items: center;
    padding-top: 15px;
    @media screen and (max-width: 1100px){
            display: none;
        }
`;

const Header = (props) => {
    

    function changeTheme() {  
        if(props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    const icon = props.theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> 

    

    

    return(
        <Nav>
            <Image src={TelosLogo} alt="logo" />
            <IconButton onClick={changeTheme}><SwitchIcon >
                {icon}
            </SwitchIcon></IconButton>
            
            <NavMenu>
                <AboutIcon />
                <Text>عن</Text> 
                <Arrow />
            </NavMenu>
            <NavMenu>
                <ExpIcon />
                <Text>يكتشف</Text> 
                <Arrow />
            </NavMenu>
            <NavMenu>
                <LearnIcon />
                <Text>يكتشف</Text> 
                <Arrow />
            </NavMenu>
            <NavMenu>
                <BuildIcon />
                <Text>يبني</Text> 
                <Arrow />
            </NavMenu>
            <NavMenu>
                <BuyIcon />
                <Text>يشترى</Text> 
                <Arrow />
            </NavMenu>
            <StyledButton>ابدأ الآن</StyledButton>
            <IconButton style={{marginRight: '20px'}}><Burguer /></IconButton>
        </Nav>
    )
}

export default Header;