import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";
import { Menu } from "..//Menu";
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



/* const NavBarSection = styled.div`
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
            <ul className="navbar-nav">{props.children}</ul>
        </NavBarSection>
    )
} */

const Nav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg-indigo);
  padding: 0 1rem;
  border-bottom: var(--border);
`;

const List = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
    width: 100px;
    height: auto;
    padding-left: 30px;
    

    @media screen and (max-width: 768px) {
        padding-left: 40px;
    }
    @media screen and (max-width: 460px){
        padding-left: 25px;
    }
`;


const Navitem = styled.li`
    
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const IconLink = styled.a`
    padding-top: 10px;
`;

const StoreIcon = styled(StorefrontIcon)`
    color: #9370db;
    transition: filter 300ms;
    transform: scale(1.2);
    &:hover{
        transform: scale(1.5);
        transition: 0.1 all ease-in-out;
        filter: brightness(1.2);
    }
`;

const BuildIcon = styled(ConstructionIcon)`
    color: #9370db;
    transition: filter 300ms;
    transform: scale(1.2);
    &:hover{
        transform: scale(1.5);
        transition: 0.1 all ease-in-out;
        filter: brightness(1.2);
    }
`;

const LearnIcon = styled(SchoolIcon)`
    color: #9370db;
    transition: filter 300ms;
    transform: scale(1.2);
    &:hover{
        transform: scale(1.5);
        transition: 0.1 all ease-in-out;
        filter: brightness(1.2);
    }
`;

const ExpIcon = styled(ExploreIcon)`
    color: #9370db;
    transition: filter 300ms;
    transform: scale(1.2);
    &:hover{
        transform: scale(1.5);
        transition: 0.1 all ease-in-out;
        filter: brightness(1.2);
    }
`;

const AboutIcon = styled(HelpCenterIcon)`
    color: #9370db;
    transition: filter 300ms;
    transform: scale(1.2);
    &:hover{
        transform: scale(1.5);
        transition: 0.1 all ease-in-out;
        filter: brightness(1.2);
    }
`;

const AboutIconWhite = styled(AboutIcon)`
    color: white;
`;



const Text = styled.h1`
    font-size: 24px;
    color: white;
    justify-content: center;
    padding-right: 10px;
`;

const ArrowIcon1 = styled(KeyboardArrowDownIcon)`
    color: white;
    cursor: pointer;
    
`;
const ArrowIcon2 = styled(KeyboardArrowDownIcon)`
    color: white;
    cursor: pointer;
    
`;
const ArrowIcon3 = styled(KeyboardArrowDownIcon)`
    color: white;
    cursor: pointer;
    
`;
const ArrowIcon4 = styled(KeyboardArrowDownIcon)`
    color: white;
    cursor: pointer;
    
`;
const ArrowIcon5 = styled(KeyboardArrowDownIcon)`
    color: white;
    cursor: pointer;
    
`;

const IconWrapper = styled.div`
    display: inline-flex;
    padding-top: 10px;
`;

const DropDown = styled.div`
   position: absolute;
   top: 100px;
   width: 300px;
   transform: translateX(-45%);
   background-color: var(--bg-indigo);
   border: var(--border);
   border-radius: var(--border-radius);
   padding: 1rem;
   overflow: hidden;
   text-align: center;
`;


const MenuItem = styled.a`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
    

    &:hover{
       background-color: #9370db;
    }
`;

const IconRight = styled.span`
    margin-left: auto;
    margin-right: 10px;
`;

const IconLeft = styled.span`
    color: white;
    padding-right: 20px;
    
`;

const ItemTitle = styled.h1`
    margin-left: auto;
    font-size: 20px;
`;


const NavBar = (props) => {
    return(
        <Nav>
            <List>
                {props.children}
            </List>
        </Nav>
    )
}

const NavItem = (props) => {

    const [open, setOpen] = useState(false);

    return(
        <Navitem>
            <IconLink href="#" onClick={() => setOpen(!open)}>
                {props.icon}
            </IconLink>
            {open && props.children}
        </Navitem>
    )
}

function DropDownMenuAbout(){

    

    function DropDownItem(props){
        return(
            <MenuItem href="#">
            <IconLeft>{props.leftIcon}</IconLeft>
            {props.children}
            <IconRight>{props.rightIcon}</IconRight>
        </MenuItem>
        )
    }


    return(
        <DropDown>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<NewspaperIcon />}>
                <ItemTitle>News</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<AboutIconWhite />}>
                <ItemTitle>About</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<GroupAddIcon />}>
                <ItemTitle>Join the Team</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<EmojiPeopleIcon />}>
                <ItemTitle>Meet the Team</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<HailIcon />}>
                <ItemTitle>Meet the Board</ItemTitle>
            </DropDownItem>
        </DropDown>
    )
}

function DropDownMenu(){

    const [activeMenu, setActiveMenu] = useState('main');

    function DropDownItem(props){
        return(
            <MenuItem href="#">
            <IconLeft>{props.leftIcon}</IconLeft>
            {props.children}
            <IconRight>{props.rightIcon}</IconRight>
        </MenuItem>
        )
    }


    return(
        <DropDown>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<NewspaperIcon />}>
                <ItemTitle>News</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<AboutIconWhite />}>
                <ItemTitle>About</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<GroupAddIcon />}>
                <ItemTitle>Join the Team</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<EmojiPeopleIcon />}>
                <ItemTitle>Meet the Team</ItemTitle>
            </DropDownItem>
            <DropDownItem
            leftIcon={<KeyboardArrowLeftIcon />}
            rightIcon={<HailIcon />}>
                <ItemTitle>Meet the Board</ItemTitle>
            </DropDownItem>
        </DropDown>
    )
}

const Header = () => {
    return(
        <NavBar>
            <Image src={TelosLogo} alt="" />
            <IconWrapper>
                <IconButton><AboutIcon /></IconButton>
                <Text>حول</Text>
                <NavItem icon={<ArrowIcon1 />}>
                    <DropDownMenuAbout />
                </NavItem>
            </IconWrapper>
            <IconWrapper>
                <IconButton><ExpIcon /></IconButton>
                <Text>يكتشف</Text>
                <NavItem icon={<ArrowIcon2 />}/>
            </IconWrapper>
            <IconWrapper>
                <IconButton><LearnIcon /></IconButton>
                <Text>يتعلم</Text>
                <NavItem icon={<ArrowIcon3 />}/>
            </IconWrapper>
            <IconWrapper>
                <IconButton><BuildIcon /></IconButton>
                <Text>يبني</Text>
                <NavItem icon={<ArrowIcon4 />}/>
            </IconWrapper>
            <IconWrapper>
                <IconButton><StoreIcon /></IconButton>
                <Text>يشترى</Text>
                <NavItem icon={<ArrowIcon5 />}/>
            </IconWrapper>
            <Button size='small' sx={{color: '#9370db', fontSize: '18px', marginRight: '30px' , padding: '8px 15px', height: '40px', marginTop: '20px', border: '2px solid #9370db'}}>ابدأ الآن</Button>
        </NavBar>
    )
}

/* const Header = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <NavBar>
            <Image src={TelosLogo} alt="" />
            <NavItem>
                <IconWrapper>
                <IconButton><AboutIcon /></IconButton>
                <Text>حول</Text>
                <ArrowIcon onClick={() => setOpen(!open)}/>
                {open && props.children}
                </IconWrapper>
            </NavItem>
            <NavItem>
                <IconWrapper>
                <IconButton><ExpIcon /></IconButton>
                <Text>يكتشف</Text>
                <ArrowIcon />
                </IconWrapper>
            </NavItem>
            <NavItem>
                <IconWrapper>
                <IconButton><LearnIcon /></IconButton>
                <Text>يتعلم</Text>
                <ArrowIcon />
                </IconWrapper>
            </NavItem>
            <NavItem>
                <IconWrapper>
                <IconButton><BuildIcon /></IconButton>
                <Text>يبني</Text>
                <ArrowIcon />
                </IconWrapper>
            </NavItem>
            <NavItem>
                <IconWrapper>
                <IconButton><StoreIcon /></IconButton>
                <Text>يشترى</Text><ArrowIcon />
                </IconWrapper>
            </NavItem>
            <StyledButton size='small' sx={{color: '#9370db', fontSize: '18px', marginRight: '10px', height: '40px', marginTop: '20px'}}>ابدأ الآن</StyledButton>
        </NavBar>
    )
} */

export default Header;