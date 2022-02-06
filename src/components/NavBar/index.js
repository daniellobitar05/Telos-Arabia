import {useState, useContext} from "react";
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
        &:hover{
            transform: scale(1.2);
        }
    }
`;
const ExpIcon = styled(ExploreIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
        }
    }
`;

const LearnIcon = styled(SchoolIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
        }
    }
`;

const BuildIcon = styled(ConstructionIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
        }
    }
`;

const BuyIcon = styled(StorefrontIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
        }
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

const AboutMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    background: green;
    top: 100px;
    left: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
`;

const ExploreMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    background: red;
    top: 100px;
    left: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
`;

const LearnMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    background: orange;
    top: 100px;
    left: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
`;

const BuildMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    background: orange;
    top: 100px;
    left: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
`;

const BuyMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    background: orange;
    top: 100px;
    left: 820px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
`;

const SubMenu = styled.div`
    height: 95%;
    width: 95%;
    display: flex;
    background: ${props => props.theme.purple};
    border-radius: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

const SmartphoneMenu = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
    border-radius: 20px;
    @media screen and (min-width: 1100px){
        display: none;
    }
`;

const NavItem = styled.li`

`;

const MenuButton = styled.a`

`;

const MenuItem = props => {

    const [open, setOpen] = useState(false);

    return(
        <NavItem>
            <MenuButton href="#" onClick={() => setOpen(!open)}>
                {props.icon}
            </MenuButton>
            {open && props.children}
        </NavItem>
    )
}


const Header = (props) => {
    

    function changeTheme() {  
        if(props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    const icon = props.theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> 

    const [activeLearn, setActiveLearn] = useState("menuOneLearn");

    let animateLearn = {};
    if(activeLearn === "menuOneLearn") animateLearn = { opacity: 0, display: 'none' };
    else if (activeLearn === "menuTwoLearn") animateLearn = {  opacity: 1 };
    

    const switchLearnEnter = () => {
        if(activeLearn === "menuOneLearn"){
            setActiveLearn("menuTwoLearn");
            setActiveAbout("menuOneAbout");
            setActiveExplore("menuOneExplore");
            setActiveBuy("menuOneBuy");
            setActiveBuild("menuOneBuild");
        } else if(activeLearn === "menuTwoLearn"){
            setActiveLearn("menuOneLearn");
        }
    }

    const switchLearnLeave = () => {
        setActiveLearn("menuOneLearn");
    }

    const [activeAbout, setActiveAbout] = useState("menuOneAbout");

    let animateAbout = {};
    if(activeAbout === "menuOneAbout") animateAbout = { opacity: 0, display: 'none' };
    else if (activeAbout === "menuTwoAbout") animateAbout = {  opacity: 1 };
    

    const switchAboutEnter = () => {
        if(activeAbout === "menuOneAbout"){
            setActiveAbout("menuTwoAbout");
            setActiveLearn("menuOneLearn");
            setActiveExplore("menuOneExplore");
            setActiveBuy("menuOneBuy");
            setActiveBuild("menuOneBuild");
        } else if(activeAbout === "menuTwoAbout"){
            setActiveAbout("menuOneAbout");
        }
    }

    const switchAboutLeave = () => {
        setActiveAbout("menuOneAbout");
    }

    const [activeExplore, setActiveExplore] = useState("menuOneExplore");

    let animateExplore = {};
    if(activeExplore === "menuOneExplore") animateExplore = { opacity: 0, display: 'none' };
    else if (activeExplore === "menuTwoExplore") animateExplore = {  opacity: 1 };
    

    const switchExploreEnter = () => {
        if(activeExplore === "menuOneExplore"){
            setActiveExplore("menuTwoExplore");
            setActiveAbout("menuOneAbout");
            setActiveLearn("menuOneLearn");
            setActiveBuy("menuOneBuy");
            setActiveBuild("menuOneBuild");
        } else if(activeExplore === "menuTwoExplore"){
            setActiveExplore("menuOneExplore");
            
        }
    }

    const switchExploreLeave = () => {
        setActiveExplore("menuOneExplore");
    }

    const [activeBuild, setActiveBuild] = useState("menuOneBuild");

    let animateBuild = {};
    if(activeBuild === "menuOneBuild") animateBuild = { opacity: 0, display: 'none' };
    else if (activeBuild === "menuTwoBuild") animateBuild = {  opacity: 1 };
    

    const switchBuildEnter = () => {
        if(activeBuild === "menuOneBuild"){
            setActiveBuild("menuTwoBuild");
            setActiveAbout("menuOneAbout");
            setActiveLearn("menuOneLearn");
            setActiveBuy("menuOneBuy");
            setActiveExplore("menuOneExplore");
        } else if(activeBuild === "menuTwoBuild"){
            setActiveBuild("menuOneBuild");
            
        }
    }

    const switchBuildLeave = () => {
        setActiveBuild("menuOneBuild");
    }

    const [activeBuy, setActiveBuy] = useState("menuOneBuy");

    let animateBuy = {};
    if(activeBuy === "menuOneBuy") animateBuy = { opacity: 0, display: 'none' };
    else if (activeBuy === "menuTwoBuy") animateBuy = {  opacity: 1 };
    

    const switchBuyEnter = () => {
        if(activeBuy === "menuOneBuy"){
            setActiveBuy("menuTwoBuy");
            setActiveAbout("menuOneAbout");
            setActiveLearn("menuOneLearn");
            setActiveExplore("menuOneExplore");
            setActiveBuild("menuOneBuild");
        } else if(activeBuy === "menuTwoBuy"){
            setActiveBuy("menuOneBuy");
            
        }
    }

    const switchBuyLeave = () => {
        setActiveBuy("menuOneBuy");
    }


    

    return(
        <>
        <Nav>
            <Image src={TelosLogo} alt="logo" />
            <IconButton onClick={changeTheme}><SwitchIcon >
                {icon}
            </SwitchIcon></IconButton>
            <NavMenu>
                <AboutIcon />
                <Text>عن</Text> 
                <Arrow onMouseEnter={switchAboutEnter}/>
                <motion.div animate={animateAbout} onMouseLeave={switchAboutLeave}>
                <AboutMenu>
                    <SubMenu></SubMenu>
                </AboutMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <ExpIcon />
                <Text>يكتشف</Text> 
                <Arrow onMouseEnter={switchExploreEnter}  />
                <motion.div animate={animateExplore} onMouseLeave={switchExploreLeave}>
                <ExploreMenu>
                    <SubMenu></SubMenu>
                </ExploreMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <LearnIcon />
                <Text>يكتشف</Text> 
                <Arrow onMouseEnter={switchLearnEnter}/>
                <motion.div animate={animateLearn} onMouseLeave={switchLearnLeave}>
                <LearnMenu>
                    <SubMenu></SubMenu>
                </LearnMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <BuildIcon />
                <Text>يبني</Text> 
                <Arrow onMouseEnter={switchBuildEnter}/>
                <motion.div animate={animateBuild} onMouseLeave={switchBuildLeave}>
                    <BuildMenu>
                        <SubMenu></SubMenu>
                    </BuildMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <BuyIcon />
                <Text>يشترى</Text> 
                <Arrow onMouseEnter={switchBuyEnter}/>
                <motion.div animate={animateBuy} onMouseLeave={switchBuyLeave}>
                    <BuyMenu>
                        <SubMenu></SubMenu>
                    </BuyMenu>
                </motion.div>
            </NavMenu>
            <StyledButton>ابدأ الآن</StyledButton>
            <MenuItem icon={<IconButton style={{marginRight: '20px'}}><Burguer /></IconButton>}>
                <p>FUCK YOU FILIP!!!</p>
            </MenuItem>
        </Nav>
        <Wrapper>
        <SmartphoneMenu>
            <SubMenu>
                <MenuItem>
                    <h1>SUCK IT FILIP!!!</h1>
                </MenuItem>
            </SubMenu>
        </SmartphoneMenu>
        </Wrapper>
        </>
    )
}

export default Header;