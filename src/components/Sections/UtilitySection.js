import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Telos from "../images/telos_logo.png";

const Section = styled.div`
    width: 100%;
    height: 400vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PageTitle = styled.div`
    font-size: 36px;
    width: 80%;
    height: 10vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    padding-bottom: 20px;
    
`;

const Subtitle = styled.div`
    width: 80vw;
    font-size: 18px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    padding-bottom: 30px;
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const ColumnWrapper = styled.div`
    height: 70vh;
    width: 70%;
    display: flex;
    
    align-items: center;
`;

const TableColumn = styled.div`
    width: 70%;
    height: 100%;
    float: left;
    
    
`;

const ButtonColumn = styled.div`
    width: 30%;
    height: 100%;
    float: left; 
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

const Row = styled.div`
    width: 70%;
    height: 5.84%;
    
`;

const ItemLeft = styled.div`
    width: 70%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;

const ItemRight = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Button = styled(motion(LinkR))`
    z-index: 100;
    background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
    font-size: 22px;
    margin: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid aqua;
    border-radius: 15px;
    padding: 15px 20px;
    margin-top: 50px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;

const Title = styled.div`
    height: 30vh;
    width: 80%;
    font-size: 32px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    transform: translate(0, 20%);
    @media screen and (max-width: 768px){
        height: 20vh;;
    }
`;

const Article = styled.div`
    width: 80vw;
    font-size: 22px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const List = styled.ul`
    list-style-type: circle;
    list-style-position: outside;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.li`
    height: 50px;
    color: white;
    font-size: 20px;
`;

const InnerTitle = styled.div`
    width: 50%;
    height: 10vh;
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

const IconColumnRight = styled(LinkS)`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

`;

const ToggleColumn = styled.div`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
const EmptyColumn = styled.div`
   width: 50%;
   height: 100%;
   float: left; 
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const UtilitySection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="utility">
            <PageTitle>TLOS token utility</PageTitle>
            <Subtitle>The telos based economy has boomed over the last 2 years, there are over 100 projects building on the network and already over 900,000 user accounts, this is driving higher utility demand for the native token in a number of ways, an effect that should only increase in the future. Get a quick introduction to TLOS tokenomics below or learn more about TLOS Tokenomics here.</Subtitle>
            <ColumnWrapper>
            <ButtonColumn>
            <Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} to="/Tokenomics">Learn More</Button>
            </ButtonColumn>
            <TableColumn>
                <Row>
                    <ItemLeft >CPU</ItemLeft>
                    <ItemRight>STAKING</ItemRight>
                </Row>
                <Row>
                    <ItemLeft>Bandwidth</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row>
                    <ItemLeft>Staker Rewards</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row></Row>
                <Row>
                    <ItemLeft>RAM - Contract Storage</ItemLeft>
                    <ItemRight>PAY FEE'S</ItemRight>
                </Row>
                <Row>
                    <ItemLeft>Premium Name Space Bids</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row></Row>
                <Row>
                    <ItemLeft>Producer Voting</ItemLeft>
                    <ItemRight>GOVERNANCE</ItemRight>
                </Row>
                <Row>
                    <ItemLeft>Work System Voting</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row>
                    <ItemLeft>Network Admendment Voting</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row></Row>
                <Row>
                    <ItemLeft>Exchange / AMM Swap Pool Liqudity</ItemLeft>
                    <ItemRight>LIQUIDITY</ItemRight>
                </Row>
                <Row></Row>
                <Row>
                    <ItemLeft>CPU</ItemLeft>
                    <ItemRight>CURRENCY</ItemRight>
                </Row>
                <Row>
                    <ItemLeft>Emerging form of paymentStaker</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row>
                    <ItemLeft>Rewards</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                </TableColumn>
            </ColumnWrapper>
            <Empty>
                <IconColumnLeft to="" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="graph" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
            
            <Title>Advantages of Telos DPoS</Title>
            <Article>To the extent that performance is always a priority for developers, the Delegated Proof of Stake consensus method utilized by Telos is worth particular attention here. DPoS carries some big pluses for developers, including:</Article>
            <Title># 1 Transactional Speed and Validator Accountability</Title>
            <Article>Telos has 21 “active” validators that are voted in by Telos token holders and are charged with maintaining the network. Other validators are called “stand-by” validators and are paid to serve as a back-up to the top 21. Any of the standby validators can be voted into the top 21 at any time by Telos token holders with elections taking place roughly every 2.5 minutes. Conversely, the top 21 can be voted out of the top 21 at any time as well. Telos has standby validators automatically rotated into the top 21 periodically to give their operation a chance to produce blocks and prove their readiness.</Article>
            <List>
                <ListItem>Telos has 0.5 second block times (24x faster than Ethereum)</ListItem>
                <ListItem>The Telos blockchain automatically rotates in standby validators to test their readiness</ListItem>
                <ListItem>Telos validator elections take place roughly every two and a half minutes.</ListItem>
            </List>
            <InnerTitle>The additional validator accountability on the telos blockchain measures include:</InnerTitle>
            <List>
                <ListItem>Automatic kicks from the schedule for failing to produce blocks handled by smart-contract.</ListItem>
                <ListItem>The Telos blockchain automatically rotates in standby validators to test their readiness</ListItem>
            </List>
            <Title>#2 No transaction fees incentivizes user adoption</Title>
            <Article>On proof-of-work (PoW) chains, such as Ethereum, users must pay a transaction or “gas” fee for every action on the network. So, for example, if a user was to ‘like’ or ‘share’ a post on a dApp which was built on a POW network, a ‘gas fee’ would charge for that single action on the blockchain to the user. With the internet offering free access to many resources, this gas fee hinders widespread adoption. This is because users are used to using centralized applications which usually do not charge users for doing basic tasks or transactions.<p>
            The Telos Blockchain Network solves this problem for dApp developers by allowing applications to stake resources (in this case, TLOS) for their users. Thus, an application can purchase or rent the amount of TLOS that their users need and remove the burden of transactional fees from their particular application. This allows for a free and frictionless experience for the application users. If application developers do not want to stake resources for their users, users can stake resources themselves. This allows them to use applications without a per-use cost. No transaction fees – coupled with fast transaction speeds – mean that users will not even know they are using an application built on top of a blockchain.</p></Article>
            <Title>#3  Unparalleled Speed and Scalability</Title>
            <Article>Delegated proof of stake allows Telos superior scalability when compared to traditional proof-of-work networks. Currently, the Telos blockchain can process over 10,000 transactions per second, and that capacity grows with code updates, sidechains, and other growth mechanisms. This kind of transactional speed puts Telos on par with centralized entities such as Visa and Mastercard and their ability to process thousands of transactions.</Article>
        </Section>
    )
}

export default UtilitySection;