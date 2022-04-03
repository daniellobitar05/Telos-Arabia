import {useState, useEffect} from "react";
import {CSSTransition} from "react-transition-group";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
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
    }
`;

const EVMExplorer = styled(ManageSearchIcon)`
    &&&{
        color: #ba55d3;
    }
`;

const TokenIcon = styled(MonetizationOnIcon)`
    &&&{
        color: #ba55d3;
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
    }
`;

const CommIcon = styled(SourceIcon)`
    &&&{
        color: #ba55d3;
    }
`;

const GrantIcon = styled(LocalFireDepartmentIcon)`
    &&&{
        color: #ba55d3;
    }
`;

const DocsIcon = styled(ArticleIcon)`
    &&&{
        color: #ba55d3;
    }
`;

const DevIcon = styled(DeveloperBoardIcon)`
    &&&{
        color: #ba55d3;
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
    top: ${({ scrollNavDown }) => (scrollNavDown ? "-100px" : "0")};
    transition: 0.8s all ease;
    z-index: 1000;
    &:hover{
        background: #663399;
        transition: 0.3s all ease-in-out;
    }
`;

const Image = styled.img`
    width: 100px;
    padding-left: 30px;
    @media screen and (min-width: 1100px){
        padding-left: 20px;
    }
`;



const StyledButton = styled(motion.button)`
    &&&{
        color: #ba55d3;
        font-size: 20px;
        border: 2px solid #ba55d3;
        padding: 5px 15px;
        border-radius: 20px;
        background: transparent;
        cursor: pointer;
        font-weight: bold;
        
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
        margin-top: 10px;
        
        
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
    height: 50%;
    @media screen and (max-width: 1100px){
            display: none;
    }
`;

const AboutMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    top: -100vh;
    transform: translate(-100%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: transparent;
    backdrop-filter: blur(8px);
    border: 2px solid white;
    z-index: 150;
`;

const ExploreMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 550px;
    top: -100vh;
    transform: translate(-100%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: transparent;
    backdrop-filter: blur(8px);
    border: 2px solid white;
    z-index: 150;
`;

const LearnMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    top: -100vh;
    transform: translate(-100%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: transparent;
    backdrop-filter: blur(8px);
    border: 2px solid white;
    z-index: 150;
`;

const BuildMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 350px;
    top: -100vh;
    transform: translate(-100%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: transparent;
    backdrop-filter: blur(8px);
    border: 2px solid white;
    z-index: 150;
`;

const BuyMenu = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    top: -100vh;
    transform: translate(-100%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: transparent;
    backdrop-filter: blur(8px);
    border: 2px solid white;
    z-index: 150;
`;

const SubMenu = styled(motion.div)`
    height: 95%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    border-radius: 20px;
    z-index: 150;
    border: 1px solid white;
`;

const SubMenuIcon = styled.div`
    display: inline-flex;
    height: 70px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    
`;

const MenuText = styled.div`
    font-size: 24px;
    color: white;
    
    
    
    cursor: pointer;
    direction: rtl;
    span{
        margin: 0 5px;
    }
`;

const SubMenuTitle = styled.div`
    display: inline-flex;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    direction: rtl;
    width: 95%;
    span{
        margin: 0 5px;
    }
`;

const MenuTitle = styled.div`
    font-size: 28px;
    color: white;
    padding: 0 10px;
    direction: rtl;
    span{
        margin: 0 5px;
        font-size: 24px;
    }
`;



const SubMenuItem = styled.div`
    height: 70px;
    width: 90%;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    img{
        width: 150px;
    }
    
`;

const RoadMapIcon = styled(MapIcon)`
    &&&{
        color: #ba55d3;
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
    font-size: 24px;
    transition: background var(--speed);
    strong{
        margin-right: 10px;
        font-weight: 500;
        font-size: 22px;
    }
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
    width: 80vw;
    padding-right: 10px;
    border-radius: 20px;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    overflow: hidden;
    top: 100px;
    z-index: 9999;
    @media screen and (min-width: 1100px){
        
    }

    @media screen and (max-width: 768px){
       
    }

    @media screen and (max-width: 660px){
        right: 7.5vw;
    }
`;

const Menu = styled.div`
    width: 100%;
    
`;

const NavWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    height: 50%;
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
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<BuyIcon />} goToMenu="buy">اشتري</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<BuildIcon/>}goToMenu="build">ابني</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<LearnIcon/>} goToMenu='learn'>تعلم</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<ExpIcon/>} goToMenu='evm-native'>استكشف</DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<AboutIcon/>} goToMenu="about">حول تيلوس</DropDownItem>
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
            <LinkR to="/Roadmap"><DropDownItem  rightIcon={<RoadMapIcon />} >خارطة طريق</DropDownItem></LinkR>
            <LinkR to="/Developers"><DropDownItem  rightIcon={<DevIcon/>} >المطورين</DropDownItem></LinkR>
            <a href="https://docs.telos.net/" target="_blank" rel="noreferrer"><DropDownItem  rightIcon={<DocsIcon/>}>وثائق</DropDownItem></a>
            <a href="https://ignite.telos.net/" target="_blank" rel="noreferrer"><DropDownItem  rightIcon={<GrantIcon/>}>برنامج المنح</DropDownItem></a>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'learn'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <LinkR to="/CommResources"><DropDownItem  rightIcon={<CommIcon />} >موارد المجتمع</DropDownItem></LinkR>
            <a href="https://help.telos.net/" target="_blank" rel="noreferrer"><DropDownItem  rightIcon={<BaseIcon/>} >قاعدة المعرفة</DropDownItem></a>
            <LinkR to="/Tokenomics"><DropDownItem  rightIcon={<TokenIcon/>}>اقتصاد تيلوس</DropDownItem></LinkR>
            <LinkR to="/ESG"><DropDownItem  rightIcon={<Image src={ESG} alt="" style={{height: '23px', width: '23px', paddingRight: '3px'}}/>}><strong>ESG</strong><t>بلوكشين</t></DropDownItem></LinkR>
            <LinkR to="/EVM"><DropDownItem  rightIcon={<Image src={EVM} alt="" style={{height: '23px', width: '23px', paddingRight: '4px'}}/>}><strong>EVM</strong><t>بلوكشين</t></DropDownItem></LinkR>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'evm-native'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon />} rightIcon={<Image src={EVM} alt="" style={{height: '23px', width: '23px', paddingRight: '1px'}}/>} goToMenu="evm"><strong>EVM</strong><t>منصة</t></DropDownItem>
            <DropDownItem leftIcon={<KeyboardArrowLeftIcon/>} rightIcon={<Image src={TelosRoundLogo} alt="" style={{height: '23px', width: '23px', paddingRight: '4px'}}/>} goToMenu="native"><strong>Native</strong><t>منصة</t></DropDownItem>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'evm'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='evm-native'></DropDownItem>
            <LinkR to="/EVMEcosystem"><DropDownItem rightIcon={<EcoIcon/>}>النظام البيئي</DropDownItem></LinkR>
            <a href="https://www.teloscan.io/" target="_blank" rel="noreferrer"><DropDownItem rightIcon={<EVMExplorer/>}>ألمنصة</DropDownItem></a>
            <a href="https://app.multichain.org/#/router" target="_blank" rel="noreferrer"><DropDownItem rightIcon={<EVMBridge/>}>تحاويل خارجية</DropDownItem></a>
            <LinkS to="getstarted" smooth={true} duration={1000} spy={true} exact="true"><DropDownItem rightIcon={<GetStarted/>}>البدء</DropDownItem></LinkS>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'native'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='evm-native'></DropDownItem>
            <LinkR to="/NativeEcosystem"><DropDownItem rightIcon={<EcoIcon/>}>النظام البيئي</DropDownItem></LinkR>
            <a href="https://wallet.telos.net/balance" target="_blank" rel="noreferrer"><DropDownItem rightIcon={<Wallet/>}>محفظة تيلوس</DropDownItem></a>
            <a href="https://telos.eosauthority.com/" target="_blank" rel="noreferrer"><DropDownItem rightIcon={<EVMExplorer/>}>ألمنصة</DropDownItem></a>
            <a href="https://dapp.ptokens.io/swap?asset=btc&from=btc&to=eth" target="_blank" rel="noreferrer"><DropDownItem rightIcon={<EVMBridge/>}>تحاويل خارجية</DropDownItem></a>
            <LinkS to="getstarted" smooth={true} duration={1000} spy={true} exact="true"><DropDownItem rightIcon={<GetStarted/>}>البدء</DropDownItem></LinkS>
            </Menu>
            </CSSTransition>
        </DropDown>

        <DropDown>
        <CSSTransition in={activeMenu === 'about'} unmountOnExit timeout={500} classNames="menu-secondary">
            <Menu>
            <DropDownItem middleIcon={<KeyboardArrowRightIcon/>} goToMenu='main'></DropDownItem>
            <LinkR to="/News"> <DropDownItem rightIcon={<NewsIcon/>}>ألأخبار</DropDownItem></LinkR>
            <LinkR to="/About"><DropDownItem rightIcon={<AboutIcon/>}>حول تيلوس</DropDownItem></LinkR>
            <LinkR to="/CommManager"><DropDownItem rightIcon={<MeetTeamIcon/>}>مالكي المنصة</DropDownItem></LinkR>
            </Menu>
            </CSSTransition>
        </DropDown>
        
        </>

          
    )
}

const MenuVariants = {
    start: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    end: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
            staggerDirection: 1
        }
    }
};

const Lightbox = styled.div`
    width: 100vw;
    height: 90vh;
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    z-index: 500;
    margin-top: 80px;
    display: none;
`;

const MenuRow = styled(motion(LinkR))`
    width: 70%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LinkRow = styled(motion.a)`
    width: 70%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ScrollRow = styled.div`
    width: 70%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10%;
`;



const Header = (props) => {

    const [scrollNavDown, setScrollNavDown] = useState(false);

    const lightbox = document.getElementById("lightbox");
    

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
    if(activeLearn === "menuOneLearn") animateLearn = { y: '-100vh', opacity: 0, transition: {duration: 0.3, type: 'tween'}};
    else if (activeLearn === "menuTwoLearn") animateLearn = {  opacity: 1, y: '107vh', transition: {duration: 0.3, type: 'tween'}};
    

    const switchLearnEnter = () => {
        if(activeLearn === "menuOneLearn"){
            setActiveLearn("menuTwoLearn");
            setActiveAbout("menuOneAbout");
            setActiveExplore("menuOneExplore");
            setActiveBuy("menuOneBuy");
            setActiveBuild("menuOneBuild");
            lightbox.classList.add("active");
        } else if(activeLearn === "menuTwoLearn"){
            setActiveLearn("menuOneLearn");
            lightbox.classList.remove("active");
        }
    }

    const switchLearnLeave = () => {
        setActiveLearn("menuOneLearn");
        lightbox.classList.remove("active");
    }

    const [activeAbout, setActiveAbout] = useState("menuOneAbout");

    let animateAbout = {};
    if(activeAbout === "menuOneAbout") animateAbout = { y: '-100vh', opacity: 0, transition: {duration: 0.3, type: 'tween'}};
    else if (activeAbout === "menuTwoAbout") animateAbout = {  opacity: 1, y: '107vh', transition: {duration: 0.3, type: 'tween'}};
    

    const switchAboutEnter = () => {
        if(activeAbout === "menuOneAbout"){
            setActiveAbout("menuTwoAbout");
            setActiveLearn("menuOneLearn");
            setActiveExplore("menuOneExplore");
            setActiveBuy("menuOneBuy");
            setActiveBuild("menuOneBuild");
            lightbox.classList.add("active");
        } else if(activeAbout === "menuTwoAbout"){
            setActiveAbout("menuOneAbout");
            lightbox.classList.remove("active");
        }
    }

    const switchAboutLeave = () => {
        setActiveAbout("menuOneAbout");
        lightbox.classList.remove("active");
    }

    const [activeExplore, setActiveExplore] = useState("menuOneExplore");

    let animateExplore = {};
    if(activeExplore === "menuOneExplore") animateExplore = { y: '-100vh', opacity: 0, transition: {duration: 0.3, type: 'tween'}};
    else if (activeExplore === "menuTwoExplore") animateExplore = {  opacity: 1, y: '107vh', transition: {duration: 0.3, type: 'tween'} };
    

    const switchExploreEnter = () => {
        if(activeExplore === "menuOneExplore"){
            setActiveExplore("menuTwoExplore");
            setActiveAbout("menuOneAbout");
            setActiveLearn("menuOneLearn");
            setActiveBuy("menuOneBuy");
            setActiveBuild("menuOneBuild");
            lightbox.classList.add("active");
        } else if(activeExplore === "menuTwoExplore"){
            setActiveExplore("menuOneExplore");
            lightbox.classList.remove("active");
            
        }
    }

    const switchExploreLeave = () => {
        setActiveExplore("menuOneExplore");
        lightbox.classList.remove("active");
    }

    const [activeBuild, setActiveBuild] = useState("menuOneBuild");

    let animateBuild = {};
    if(activeBuild === "menuOneBuild") animateBuild = { y: '-100vh', opacity: 0, transition: {duration: 0.3, type: 'tween'}};
    else if (activeBuild === "menuTwoBuild") animateBuild = {  opacity: 1, y: '107vh', transition: {duration: 0.3, type: 'tween'} };
    

    const switchBuildEnter = () => {
        if(activeBuild === "menuOneBuild"){
            setActiveBuild("menuTwoBuild");
            setActiveAbout("menuOneAbout");
            setActiveLearn("menuOneLearn");
            setActiveBuy("menuOneBuy");
            setActiveExplore("menuOneExplore");
            lightbox.classList.add("active");
        } else if(activeBuild === "menuTwoBuild"){
            setActiveBuild("menuOneBuild");
            lightbox.classList.remove("active");
            
        }
    }

    const switchBuildLeave = () => {
        setActiveBuild("menuOneBuild");
        lightbox.classList.remove("active");
    }

    const [activeBuy, setActiveBuy] = useState("menuOneBuy");

    let animateBuy = {};
    if(activeBuy === "menuOneBuy") animateBuy = { y: '-100vh', opacity: 0, transition: {duration: 0.3, type: 'tween'}};
    else if (activeBuy === "menuTwoBuy") animateBuy = {  opacity: 1, y: '107vh', transition: {duration: 0.3, type: 'tween'} };
    

    const switchBuyEnter = () => {
        if(activeBuy === "menuOneBuy"){
            setActiveBuy("menuTwoBuy");
            setActiveAbout("menuOneAbout");
            setActiveLearn("menuOneLearn");
            setActiveExplore("menuOneExplore");
            setActiveBuild("menuOneBuild");
            lightbox.classList.add("active");
        } else if(activeBuy === "menuTwoBuy"){
            setActiveBuy("menuOneBuy");
            lightbox.classList.remove("active");
            
        }
    }

    const switchBuyLeave = () => {
        setActiveBuy("menuOneBuy");
        lightbox.classList.remove("active");
    }

    
    const changeNavDown = () => {
        if(window.scrollY >= 150) {
            setScrollNavDown(true);
            setActiveAbout("menuOneAbout");
            setActiveBuy("menuOneBuy");
            setActiveBuild("menuOneBuild");
            setActiveLearn("menuOneLearn");
            setActiveExplore("menuOneExplore");
            lightbox.classList.remove("active");
            
        } 
        else {
            setScrollNavDown(false)
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', changeNavDown) 
    }, []);
    
    

    return(
        <>
        <Nav scrollNavDown={scrollNavDown}>
            <LinkR to="/"><Image src={TelosLogo} alt="logo" /></LinkR>
            <IconButton onClick={changeTheme}><SwitchIcon >
                {icon}
            </SwitchIcon></IconButton>
            <NavMenu>
                <NavWrapper onClick={switchAboutEnter}>
                <AboutIcon />
                <Text>حول تيلوس</Text>
                <motion.div >
                <Arrow  />
                </motion.div> 
                </NavWrapper>
                <motion.div animate={animateAbout} onMouseLeave={switchAboutLeave} scrollNavDown={switchAboutLeave}>
                <AboutMenu variants={MenuVariants} initial="start" animate="end">
                    <SubMenu >
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/News">
                            <MenuText>ألأخبار</MenuText>
                            <NewsIcon/>
                        </MenuRow>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/About">
                            <MenuText>حول تيلوس</MenuText>
                            <AboutIcon/>
                        </MenuRow>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/CommManager">
                            <MenuText>مالكي المنصة</MenuText>
                            <MeetTeamIcon/>
                        </MenuRow>
                    </SubMenu>
                </AboutMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <ExpIcon />
                <Text>اكتشف</Text> 
                <motion.div>
                <Arrow onClick={switchExploreEnter}  />
                </motion.div>
                <motion.div animate={animateExplore} onMouseLeave={switchExploreLeave}>
                <ExploreMenu>
                    <SubMenu>
                        <SubMenuTitle>
                        <MenuTitle style={{color: 'aqua'}}><t>منصة</t><span>EVM</span></MenuTitle>
                        <Image src={EVM} alt="" style={{height: '25px', width: '25px'}}/>
                        </SubMenuTitle>
                        <LinkRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} href="https://www.teloscan.io/" target="_blank" rel="noreferrer">
                            <MenuText>ألمنصة</MenuText>
                            <EVMExplorer/>
                        </LinkRow>
                        <LinkRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} href="https://www.teloscan.io/" target="_blank" rel="noreferrer">
                            <MenuText>تحاويل خارجية</MenuText>
                            <EVMBridge/>
                        </LinkRow>
                        <motion.div style={{width: '100%', marginLeft: '10%'}} whileHover={{width: '80%'}} whileTap={{scale: 0.9}}><ScrollRow>
                        <LinkS to="getstarted" smooth={true} duration={1000} spy={true} exact="true"><MenuText>البدء</MenuText></LinkS>
                        <LinkS to="getstarted" smooth={true} duration={1000} spy={true} exact="true"><GetStarted sx={{transform: 'scale(1.2)', color: '#ba55d3'}}/></LinkS>
                        </ScrollRow></motion.div>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/EVMEcosystem">
                            <MenuText>النظام البيئي</MenuText>
                            <EcoIcon/>
                        </MenuRow>
                        <SubMenuTitle>
                        <MenuTitle style={{ color: 'aqua'}}><t>منصة</t><span>Native</span></MenuTitle>
                        <Image src={ESG} alt="" style={{height: '25px', width: '25px'}}/>
                        </SubMenuTitle>
                        <LinkRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} href="https://telos.eosauthority.com/" target="_blank" rel="noreferrer">
                            <MenuText>ألمنصة</MenuText>
                            <EVMExplorer/>
                        </LinkRow>
                        <LinkRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} href="https://dapp.ptokens.io/swap?asset=btc&from=btc&to=eth" target="_blank" rel="noreferrer">
                            <MenuText>تحاويل خارجية</MenuText>
                            <EVMBridge/>
                        </LinkRow>
                        <motion.div style={{width: '100%', marginLeft: '10%'}} whileHover={{width: '80%'}} whileTap={{scale: 0.9}}><ScrollRow>
                        <LinkS to="getstarted" smooth={true} duration={1000} spy={true} exact="true"><MenuText>البدء</MenuText></LinkS>
                        <LinkS to="getstarted" smooth={true} duration={1000} spy={true} exact="true"><GetStarted sx={{transform: 'scale(1.2)', color: '#ba55d3'}}/></LinkS>
                        </ScrollRow></motion.div>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/NativeEcosystem">
                            <MenuText>النظام البيئي</MenuText>
                            <EcoIcon/>
                        </MenuRow>
                    </SubMenu>
                </ExploreMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <LearnIcon />
                <Text>تعلم</Text> 
                <motion.div >
                <Arrow onClick={switchLearnEnter}/>
                </motion.div>
                <motion.div animate={animateLearn} onMouseLeave={switchLearnLeave}>
                <LearnMenu>
                    <SubMenu>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/CommResources">
                            <MenuText>ألأخبار</MenuText>
                            <CommIcon/>
                        </MenuRow>
                        <LinkRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} href="https://help.telos.net/" target="_blank" rel="noreferrer">
                            <MenuText>قاعدة المعرفة</MenuText>
                            <BaseIcon/>
                        </LinkRow>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/Tokenomics">
                            <MenuText>اقتصاد تيلوس</MenuText>
                            <TokenIcon/>
                        </MenuRow>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/ESG">
                            <MenuText><t>بلوكشين</t><span>ESG</span></MenuText>
                            <Image src={ESG} alt="" style={{height: '25px', width: '25px'}}/>
                        </MenuRow>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/EVM">
                            <MenuText><t>بلوكشين</t><span>EVM</span></MenuText>
                            <Image src={EVM} alt="" style={{height: '25px', width: '25px'}}/>
                        </MenuRow>
                    </SubMenu>
                </LearnMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <BuildIcon />
                <Text>ابني</Text> 
                <motion.div >
                <Arrow onClick={switchBuildEnter}/>
                </motion.div>
                <motion.div animate={animateBuild} onMouseLeave={switchBuildLeave}>
                    <BuildMenu>
                        <SubMenu>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/Roadmap">
                            <MenuText>خارطة طريق</MenuText>
                            <RoadMapIcon/>
                        </MenuRow>
                        <MenuRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} to="/Developers">
                            <MenuText>المطورين</MenuText>
                            <DevIcon/>
                        </MenuRow>
                        <LinkRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} href="https://docs.telos.net/" target="_blank" rel="noreferrer">
                            <MenuText>وثائق</MenuText>
                            <DocsIcon/>
                        </LinkRow>
                        <LinkRow whileHover={{width: '60%'}} whileTap={{scale: 0.9}} href="https://ignite.telos.net/" target="_blank" rel="noreferrer">
                            <MenuText>برنامج المنح</MenuText>
                            <GrantIcon/>
                        </LinkRow>
                        </SubMenu>
                    </BuildMenu>
                </motion.div>
            </NavMenu>
            <NavMenu>
                <BuyIcon />
                <Text>يشترى</Text> 
                <motion.div >
                <Arrow onClick={switchBuyEnter}/>
                </motion.div>
                <motion.div animate={animateBuy} onMouseLeave={switchBuyLeave}>
                    <BuyMenu>
                        <SubMenu>
                            <motion.div whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}><a href="https://trade.kucoin.com/TLOS-USDT" target="_blank" rel="noreferrer"><SubMenuItem><img src={Kucoin} alt="" /></SubMenuItem></a></motion.div>
                            <motion.div whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}><a href="https://www.gate.io/es/trade/TLOS_USDT" target="_blank" rel="noreferrer"><SubMenuItem><img src={Gate} alt="" style={{transform: 'scaleY(1.4)'}}/></SubMenuItem></a></motion.div>
                            <motion.div whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}><a href="https://pancakeswap.finance/swap?outputCurrency=0xb6c53431608e626ac81a9776ac3e999c5556717c" target="_blank" rel="noreferrer"><SubMenuItem><img src={Pancake} alt="" /></SubMenuItem></a></motion.div>
                            <motion.div whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}><a href="https://app.uniswap.org/#/swap?use=V2%3FinputCurrency%3DETH&outputCurrency=0x7825e833d495f3d1c28872415a4aee339d26ac88&chain=mainnet" target="_blank" rel="noreferrer"><SubMenuItem><img src={Uniswap} alt="" style={{height: '50px', paddingTop: '10px'}}/></SubMenuItem></a></motion.div>
                            <motion.div whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}><a href="https://cryptolocally.com/en/crypto-offers/?type=buy&crypto=BTC&location=any&currency=any" target="_blank" rel="noreferrer"><SubMenuItem><img src={Locally} alt="" style={{transform: 'scale(1.4)'}}/></SubMenuItem></a></motion.div>
                        </SubMenu>
                    </BuyMenu>
                </motion.div>
            </NavMenu>
            <LinkS to="getstarted" smooth={true} duration={1000} spy={true} exact="true"><StyledButton whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>ابدأ الآن</StyledButton></LinkS>
            <NavItem icon={<IconButton style={{marginRight: '20px'}}><Burguer /></IconButton>}>
                <DropDownMenu />
            </NavItem>
        </Nav>
        <Lightbox className="lightbox" id="lightbox"/>
        </>
    )
}

export default Header;