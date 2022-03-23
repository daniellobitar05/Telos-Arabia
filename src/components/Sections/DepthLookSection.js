import {useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back4};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageTitle = styled(motion.div)`
    font-size: 84px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 42px;

    }
    
`;

const Title = styled(motion.div)`
    height: 10vh;
    width: 80%;
    font-size: 62px;
    color: white;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 0);
    }
`;

const Article = styled(motion.div)`
    width: 70vw;
    font-size: 30px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
    }
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const IconColumnRight = styled(LinkS)`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background: transparent;

`;

const ToggleColumn = styled.div`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
`;

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;

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

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const DepthLookSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw'
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: 0,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])

    return(
        <Section id="depthlook" ref={ref}>
            <PageTitle animate={animation}>في نظرة متعمقة في اقتصاد العملة</PageTitle>
            <Title animate={animation}>منشأ</Title>
            <Article animate={animationTwo}><p><t>تم إنشاء رمز تيلوس المميز في عام 2018 عندما تم التقاط لقطة تكوين الشبكة. لقطة</t><span>Genesis</span><t>المستمدة من شبكة</t><span>EOS ,</span><t>ذات الحسابات المحددة بـ</t><span>40000 TLOS. </span><t>تم القيام بذلك للحد من إمكانات "مستثمري الحيتان" والحفاظ على توزيع الملكية بشكل عادل.</t></p></Article>
            <Article animate={animationTwo}><p><t>تم إنشاء إجمالي</t><span>330،753،222 TLOS</span><t>في هذه اللقطة الأولية. تم توزيع 12 مليون من هذه الرموز المميزة الأولية على تيلوس</t><span>Founders Rewards Pool</span><t>و شركة تيلوس. سمح ذلك للشبكة بالإطلاق بطريقة شعبية ، دون أي تمويل أولي للعملة أو رأس المال الاستثماري. يعد هذا أمرًا نادرًا في العديد من سلاسل الكتل الحديثة ، ولكنه ضرورة لأن تكون شبكات</t><span>DPoS</span><t>لا مركزية حقًا.</t></p></Article>
            <Empty>
                <IconColumnLeft to="depthlooktwo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="supply" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
            {/* 
            <Article>There is enough funding in these reserves to last until 2024 at the current payout rate. However, the funds are expected to last much longer through tokenomic amendments which can be enacted by the community.</Article>
            <Article>Because the network is funded by reserves, the circulating supply increases overtime but the amount of TLOS in existence does not. Once all reserves are exhausted, the community may decide to introduce inflation of supply at a low rate that is beneficial to everyone. Alternatively, the network may be funded by charging for certain premium services. All of this is in the hands of the stakeholders, in a truly decentralized way.</Article>
            <Title>Funded Bodies</Title>
            <Article>The TLOS Reserves offer funding to several accounts on a regular basis, as decided upon by stakeholders. These accounts and their purposes are as follows:</Article>
            <Title>Validators (eosio.bpay) – &lsaquo; 900,000 TLOS/month</Title>
            <Article>Validators, also known as Block Producers, are the ones maintaining the Telos network’s ledger and validating the transactions as they come in. Anyone can set up a validating node, but only the top 42 block producers voted by the stakeholder community, receive payment along with a responsibility for performing active network operations.</Article>
            <Article>The top 42 validators consist of 21 “active” validators, handling most of the transactions, and a cohort of 21 “standby” producers that are regularly tested to serve as a back-up. Elections are tallied approximately every 2.5 minutes, meaning that the rankings of Validators can change at any time.</Article>
            <Article>A maximum of ~ 900,000 TLOS a month is distributed towards the validators. Active validators can receive a maximum of 28,000 TLOS every month, while standby block producers receive half of that, during that same time period. The latest TBNOA change that passed, regarding the network validators' pay, can be found here, an elaborate explanation of the same can be read here.</Article>
            <Title>Economic Development Fund (econdevfunds) – 150,000 TLOS/month</Title>
            <Article>The economic development fund is utilized to pay for expenses that are determined by the Block Producers to be beneficial for the network. Budgeting decisions are decided upon via a majority multisig vote of active BPs, provided that the total amount of funds disbursed does not exceed 5,260,000 TLOS per month.</Article>
            <Title>Telos Foundation (tf) – 700,000 TLOS/month</Title>
            <Article>The Telos Foundation is an apolitical organization with a mission to aid in the promotion and improvement of the Telos Network. The initial mandate states that this is to be executed by promoting the network through grants and administration, underwriting expenses that increase the functionality of the Telos network and maintaining a published guidance price for Telos Network RAM. Any decisions that the Telos Foundation make are agnostic to network operations and governance systems.</Article>
            <Article>Budgeting decisions for the Telos foundation are determined via multisig by the Telos Foundation board members. Board members are voted in by TLOS holders as representatives of the community through regular elections.</Article>
            <Title>Telos Works (eosio.saving) – 350,000 TLOS/month</Title>
            <Article>Telos Works, also known as the Worker Proposal System (WPS) empowers Telos users to guide and pay for the development, promotion and growth of the Telos network. Anyone can submit a request for funding in order to carry out a certain task and anyone can vote.</Article>
            <Article>A proposal may request any amount of TLOS, but a 5% deposit of requested funds is required. The deposit can be recouped if the proposal reaches a certain threshold of user voting.</Article>
            <Title>Telos Core Developers (treasury.tcd) – 300,000 TLOS/month</Title>
            <Article>The Telos Core Developers exist to push development of the Telos network forward from a technical standpoint. They are a key player in maintenance and innovation of the Telos ecosystem and its tools. Additionally, the Core Developers usually play a role in facilitating governance on the technical front. Use of these funds are controlled by the heads of this initiative, which are decided upon by community vote during economic amendments.</Article>
            <Title>Resource Exchange (eosio.rex) 1,700,000 TLOS/month</Title>
            <Article>The Telos Resource Exchange (REX) plays an integral role in making the Telos network one of the most accessible and equitable blockchains. It allows developers to lease TLOS in order to pay for network resources at an affordable rate. At the same time, TLOS holders loaning these resources will receive a high yielding return, paid out by REX funding.</Article>
            <Title>TLOS ERC-20 & TLOS BEP-20</Title>
            <Article>It’s possible to utilize Telos outside of the Telos native mainnet, through ERC-20 and BEP-20 versions of TLOS. ERC-20 TLOS is available on the Ethereum mainnet and BEP-20 TLOS is available on Binance Smart Chain (BSC).</Article>
            <Article>This is made possible through bridges opened between Telos and these other networks in 2021, via pTokens. These are wrapped versions of TLOS which can be transferred in and out of the Telos native mainnet at any time. Doing so does not create additional tokens, and it's important to note that any TLOS existing on Ethereum or BSC are included in the total supply of 355 million TLOS.</Article>
            <Bigtitle>TLOS Utility</Bigtitle>
            <Article>TLOS, the native network token is useful in a plethora of ways, including governance, ownership and use of Telos network resources, staking rewards, and as a means for payment for telos based apps, services and more.</Article>
            <Article></Article>
            <Title>Ownership of Telos Network Resources</Title>
            <Article>At its heart, TLOS represents ownership of network resources. Developers and users can stake TLOS in the network to gain access to resources necessary for processing transactions. The number of resources received is quantified by the percentage of TLOS an account stakes. This is relative to the amount of TLOS in existence. For example, if a user owned and staked 1% of the TLOS supply, they could access 1% of the network’s resources.</Article>
            <Article>In this way, owning TLOS is a lot like owning the deed to a plot of land, which increases in value as the demand for real estate increases. This potential perceived value of TLOS is higher than many other blockchains, due to powerful nature of the network and limited supply of TLOS.</Article>
            <Article>An everyday user will require very little resources to carry out simple tasks like buying and sending tokens. So, minimal TLOS needs to be staked in these use cases, keeping standard transactions virtually feeless. However, applications and organizations will require greater resources to build the complicated infrastructure that powers their ecosystems.</Article>
            <Article>One additional advantage to Telos, over other blockchains, is the ability for developers to stake resources for their users. Utilizing this, developers can create applications with a simple user experience and no fees or extra hassle for their customers. This increases the potential for adoption of blockchain technology by every possible industry.</Article>
            <Title>Taking Part in Governance</Title>
            <Article>The second primary utility of TLOS is as a governance token. The Telos Decide governance engine is a powerful tool that sets Telos apart from other blockchains.</Article>
            <Article>Whether it’s voting on validators, legislation amendments or grant proposals, governance is a massive part of the Telos blockchain. On Telos, virtually any aspect of network operations can be modified through popular vote, something not possible on other major blockchains.</Article>
            <Article>Anybody holding TLOS can submit or vote on a proposal. This ensures that the direction of the chain fairly represents the community’s best interest and that its resources are used in a way that the majority of stakeholders agree on. TLOS must also be paid to submit a proposal, adding to the utility of the token even further.</Article>
            <Article>Strong, equitable governance is something that other networks have always lacked, resulting in forks. Telos’ governance keeps it nimble in operation and drastically reduces this risk to investors and users.</Article>
            <Title>Staking in the Resource Exchange (REX) for High APY Rewards</Title>
            <Article>The Telos Resource Exchange (REX) allows holders of TLOS to lease their unused resources to developers, in exchange for high yielding rewards. These rewards are paid to REX from the Exchange Token Reserve Fund.</Article>
            <Article>Rewards being paid from the reserve keeps the cost of renting these resources cheap for developers, while still giving the lessor a fair return for their loan. This sets Telos apart from many other blockchains as it is extremely accessible to build on.</Article>
            <Title>Interacting with Other Apps Built on Telos</Title>
            <Article>TLOS maintains further utility in the countless ways that it powers other services built on the network. Many applications use Telos as a primary method for payment, which is strengthened by the addition of other Telos DeFi tools such as T-Bonds, T-Swaps or T-Starter.</Article>
            <Article>dStor is another example of an application that adds utility to the TLOS token, outside of its initial intended use cases. dStor is a revolutionary, decentralized storage solution, created by GoodBlock. Even though the storage system is its own separate network, node operators are paid with the TLOS token and these financial transactions happen on the Telos network.</Article>
            <Article>These are just a few of the many additional use cases for Telos, created by additional initiatives within the Telos ecosystem.</Article>
            <Title>Conclusion: Holding TLOS is Like Holding the Future of Telos</Title>
            <Article>As previously explained, all network initiatives are funded with the TLOS token, including the Telos Foundation, Block Producers (Validators), REX, Telos Core Devs, Economic Development Fund and Worker Proposal System. Because of this, TLOS is the funding vehicle that powers every aspect of Telos.</Article>
            <Article>When you pair this with governance, you have a token that is extremely unique. Holding TLOS allows you to take part in democratic decisions surrounding how the remaining resources are utilized.</Article>
            <Article>With this in mind, the true utility of TLOS is that it empowers the network to continue evolving, as it sustains itself in a way that mutually benefits all network users and token holders.</Article> */}
        </Section>
    )
}

export default DepthLookSection;