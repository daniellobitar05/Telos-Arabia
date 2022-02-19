import {useState, useContext} from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";
import TelosLogo from "../SVG/telos_letter_logo.svg";
import Locally from "../SVG/cryptolocally_logo.svg";
import Kucoin from "../SVG/kucoin_logo.svg";
import Gate from "../images/gate_logo.png";
import Pancake from "../images/pancake_logo.png";
import Uniswap from "../images/uniswap_logo.png";
import ESG from "../images/esg_logo.png";
import EVM from "../images/evm_logo.png";
import TelosRoundLogo from "../images/telos_logo.png";
import { motion } from "framer-motion";
import {IconButton} from "@material-ui/core";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SourceIcon from '@mui/icons-material/Source';
import ArticleIcon from '@mui/icons-material/Article';
import MapIcon from '@mui/icons-material/Map';
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
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import YardIcon from '@mui/icons-material/Yard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import "./style.css";

const MeetBoardIcon = styled(HailIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const MeetTeamIcon = styled(EmojiPeopleIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const JoinIcon = styled(GroupAddIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;



const NewsIcon = styled(NewspaperIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const Wallet = styled(AccountBalanceWalletIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const EcoIcon = styled(YardIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const GetStarted = styled(PlayArrowIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const EVMBridge = styled(AirlineStopsIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const EVMExplorer = styled(ManageSearchIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const TokenIcon = styled(MonetizationOnIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const GovIcon = styled(GroupWorkIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const BaseIcon = styled(ContactSupportIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const CommIcon = styled(SourceIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const GrantIcon = styled(LocalFireDepartmentIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const DocsIcon = styled(ArticleIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const DevIcon = styled(DeveloperBoardIcon)`
    &&&{
        color: #ba55d3;
        border-radius: 50%;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const Nav = styled.div`
    height: 80px;
    width: 100%;
    background: ${props => props.theme.purple};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
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
        transition: filter 300ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
        @media screen and (max-width: 1100px){
            display: none;
        }
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
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;
const ExpIcon = styled(ExploreIcon)`
    &&&{
        color: #ba55d3;
        transition: filter 300ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const LearnIcon = styled(SchoolIcon)`
    &&&{
        color: #ba55d3;
        transition: filter 300ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const BuildIcon = styled(ConstructionIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;

const BuyIcon = styled(StorefrontIcon)`
    &&&{
        color: #ba55d3;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
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
    top: 100px;
    left: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
    z-index: 150;
`;

const ExploreMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    top: 100px;
    left: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
    z-index: 150;
`;

const LearnMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    top: 100px;
    left: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
    z-index: 150;
`;

const BuildMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    top: 100px;
    left: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
    z-index: 150;
`;

const BuyMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    top: 100px;
    left: 820px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ba55d3;
    z-index: 150;
`;

const SubMenu = styled.div`
    height: 95%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.purple};
    border-radius: 20px;
    z-index: 150;
`;

const SubMenuItem = styled.div`
    height: 60px;
    width: 90%;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid white;
`;

const RoadMapIcon = styled(MapIcon)`
    &&&{
        color: #ba55d3;
        transition: filter 300ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
            filter: brightness(1.2);
        }
    }
`;



const List = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

const MenuIconTwo = styled.a`
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavItem = (props) => {

    const [open, setOpen] = useState(false);

    return(
        <List>
        <MenuIconTwo onClick={() => setOpen(!open)}>
        {props.icon}
        </MenuIconTwo>
        {open && props.children}
        </List>
    )
}

const MenuMenuItem = styled.a`
    height: 60px;
    display: flex;
    border-radius: 8px;
    align-items: center;
    justify-content: right;
    transition: background var(--speed);
    &:hover{
        background-color: #dda0dd;
    }

    
`;
const IconLeft = styled.span`
    padding-left: 20px;
    padding-top: 4px;
`;
const IconRight = styled.span`
    margin-left: auto;
    transform: scale(1.2);
    padding-right: 20px;
`;
const IconMiddle = styled.span`
    margin-left: auto;
    margin-right: auto;
    transform: scale(1.2);
    padding-left: 60px;
`;
const DropDown = styled.div`
    position: absolute;
    width: 300px;
    padding-right: 10px;
    border-radius: 20px;
    background: purple;
    overflow: hidden;
    top: 100px;
    z-index: 9999;
    @media screen and (min-width: 1100px){
        
    }

    @media screen and (max-width: 768px){
       
    }

    @media screen and (max-width: 660px){
        right: 20px;
    }
`;

const Menu = styled.div`
    width: 100%;
    
`;

const DropDownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');

    const DropDownItem = props => {
        return(
            <MenuMenuItem onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <IconLeft>{props.leftIcon}</IconLeft>
                
                {props.children}
                <IconMiddle>{props.middleIcon}</IconMiddle>
                <IconRight>{props.rightIcon}</IconRight>
            </MenuMenuItem>
        );
    }
    
    return(
        <>
        
        <DropDown>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
            <Menu>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<BuyIcon />} goToMenu="buy">BUY</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<BuildIcon/>}goToMenu="build">BUILD</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<LearnIcon/>} goToMenu='learn'>LEARN</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<ExpIcon/>} goToMenu='evm-native'>EXPLORE</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<AboutIcon/>} goToMenu="about">ABOUT</DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>
        

        
        <DropDown>
        <CSSTransition in={activeMenu === 'buy'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <DropDownItem  ><a href="https://trade.kucoin.com/TLOS-USDT" target="_blank" rel="noreferrer"><Image src={Kucoin} alt="" style={{paddingLeft: '90px'}}/></a></DropDownItem>
            <DropDownItem  ><a href="https://www.gate.io/es/trade/TLOS_USDT" target="_blank" rel="noreferrer"><Image src={Gate} alt="" style={{transform: 'scale(1.2)', paddingLeft: '75px'}}/></a></DropDownItem>
            <DropDownItem  ><a href="https://pancakeswap.finance/swap?outputCurrency=0xb6c53431608e626ac81a9776ac3e999c5556717c" target="_blank" rel="noreferrer"><Image src={Pancake} alt="" style={{transform: 'scale(1.5)', paddingLeft: '65px'}}/></a></DropDownItem>
            <DropDownItem  ><a href="https://app.uniswap.org/#/swap?use=V2%3FinputCurrency%3DETH&outputCurrency=0x7825e833d495f3d1c28872415a4aee339d26ac88&chain=mainnet" target="_blank" rel="noreferrer"><Image src={Uniswap} alt="" style={{transform: 'scale(1.5)', paddingLeft: '70px'}}/></a></DropDownItem>
            <DropDownItem  ><a href="https://cryptolocally.com/en/crypto-offers/?type=buy&crypto=BTC&location=any&currency=any" target="_blank" rel="noreferrer"><Image src={Locally} alt="" style={{transform: 'scale(1.5)',paddingLeft: '70px', paddingTop: '5px'}}/></a></DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'build'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <DropDownItem  rightIcon={<RoadMapIcon />} >ROADMAP</DropDownItem>
            <DropDownItem  rightIcon={<DevIcon/>} >DEVELOPERS</DropDownItem>
            <DropDownItem  rightIcon={<DocsIcon/>}>DOCUMENTATION</DropDownItem>
            <DropDownItem  rightIcon={<GrantIcon/>}>GRANT PROGRAM</DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'learn'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <DropDownItem  rightIcon={<CommIcon />} >COMMUNITY RESOURCES</DropDownItem>
            <DropDownItem  rightIcon={<BaseIcon/>} >KNOWLEDGE BASE</DropDownItem>
            <DropDownItem  rightIcon={<GovIcon/>}>GOVERNANCE</DropDownItem>
            <DropDownItem  rightIcon={<TokenIcon/>}>TLOS TOKENOMICS</DropDownItem>
            <DropDownItem  rightIcon={<Image src={ESG} alt="" style={{height: '23px', width: '23px', paddingRight: '3px'}}/>}>ESG BLOCKCHAIN</DropDownItem>
            <DropDownItem  rightIcon={<Image src={EVM} alt="" style={{height: '23px', width: '23px', paddingRight: '4px'}}/>}>EVM BLOCKCHAIN</DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'evm-native'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon />} rightIcon={<Image src={EVM} alt="" style={{height: '23px', width: '23px', paddingRight: '4px'}}/>} goToMenu="evm">EVM PLATFORM</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<Image src={TelosRoundLogo} alt="" style={{height: '23px', width: '23px', paddingRight: '4px'}}/>} goToMenu="native">NATIVE PLATFORM</DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'evm'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='evm-native'></DropDownItem>
            <DropDownItem rightIcon={<EVMExplorer/>}>BLOCK EXPLORER</DropDownItem>
            <DropDownItem rightIcon={<EVMBridge/>}>BRIDGE</DropDownItem>
            <DropDownItem rightIcon={<GetStarted/>}>GET STARTED</DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'native'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='evm-native'></DropDownItem>
            <DropDownItem rightIcon={<EcoIcon/>}>ECOSYSTEM</DropDownItem>
            <DropDownItem rightIcon={<Wallet/>}>WEB WALLET</DropDownItem>
            <DropDownItem rightIcon={<EVMExplorer/>}>BLOCK EXPLORER</DropDownItem>
            <DropDownItem rightIcon={<EVMBridge/>}>BRIDGE</DropDownItem>
            <DropDownItem rightIcon={<GetStarted/>}>GET STARTED</DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'about'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <DropDownItem rightIcon={<NewsIcon/>}>NEWS</DropDownItem>
            <DropDownItem rightIcon={<AboutIcon/>}>ABOUT</DropDownItem>
            <DropDownItem rightIcon={<JoinIcon/>}>JOIN THE TEAM</DropDownItem>
            <DropDownItem rightIcon={<MeetTeamIcon/>}>MEET THE TEAM</DropDownItem>
            <DropDownItem rightIcon={<MeetBoardIcon/>}>MEET THE BOARD</DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>
        
        </>

          
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
                        <SubMenu>
                            <SubMenuItem>KUCOIN</SubMenuItem>
                            <SubMenuItem>KUCOIN</SubMenuItem>
                            <SubMenuItem>KUCOIN</SubMenuItem>
                            <SubMenuItem>KUCOIN</SubMenuItem>
                            <SubMenuItem>KUCOIN</SubMenuItem>
                        </SubMenu>
                    </BuyMenu>
                </motion.div>
            </NavMenu>
            <StyledButton>ابدأ الآن</StyledButton>
            <NavItem icon={<IconButton style={{marginRight: '20px'}}><Burguer /></IconButton>}>
                <DropDownMenu />
            </NavItem>
        </Nav>
        
        </>
    )
}

export default Header;