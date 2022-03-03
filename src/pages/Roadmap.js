import {useState} from "react";
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import Footer from "../components/Sections/Footer";
import Picture from "../components/images/news/news2.jpg";

const Section = styled.div`
    width: 100%;
    height: 1490vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PageTitle = styled.div`
    font-size: 62px;
    width: 80%;
    height: 45vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    text-align: right;
    
`;

const ImageHolder = styled.div`
    width: 50%;
    height: 60vh;
    background: red;
    display: flex;
    background-image: url(${Picture});
    background-size: cover;
    transform: translate(-25%, -10%);
    @media screen and (max-width: 768px){
        height: 30vh;;
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

const Bigtitle = styled.div`
    height: 40vh;
    width: 80%;
    font-size: 48px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
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

const Roadmap = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="roadmap">
                    <PageTitle>Announcing the New Telos Roadmap!</PageTitle>
                    <ImageHolder></ImageHolder>
                    <Title>The future is looking epic for Telos!</Title>
                    <Article><p>Welcome to our new Telos Roadmap for the years to come! Some of our readers have been a Telos fan since the mainnet went live three short years ago. Others are just now learning about the incredible real-world use cases and potential for Telos. Wherever you are on your Telos journey, we know you’ll love reading about our new roadmap.</p><p>This roadmap is our guiding vision for the future of Telos. As you read through, remember that there has been a ton of great restructuring behind the scenes. We’re excited for everything the future holds for Telos!</p>
                    <p>Questions may come to you after you’ve read through our roadmap. Tune into our <a href="https://www.youtube.com/watch?v=mLhbdy6CqYM" target="_blank" rel="noreferrer"> Telos Tuesday AMA with the core team on Jan. 11th 2022.</a>From then on, we’ll bring back technical updates twice a month so that you can stay up to date about all these awesome initiatives.</p>
                    <p>One last thing before we dive into the roadmap! The Present section is our summary of what we’re working on right now. The Future section is our summary of everything that we’re working towards for the future of the Telos ecosystem. Stay tuned for those weekly updates to find out what we’re tackling next and get the latest on the technical developments of Telos.</p><p>Let’s dive into the new Telos Roadmap! Buckle up, it’s quite a ride.</p></Article>
                    <Bigtitle>Present</Bigtitle>
                    <Article>The Telos Core Team's work continues even after a product as incredible as the Telos EVM launches. Check out the products and initiatives that are currently underway within the Telos ecosystem. Many of these are already live for your use, with the team adding new features on a regular basis.</Article>
                    <Title>Telos EVM</Title>
                    <Article><p>The launch of the Telos EVM was one of the most monumental milestones for the Telos ecosystem since its mainnet launch. Telos launched a layer one Ethereum Virtual Machine with no front running, flat gas fees, energy efficiency, and extreme speed and power! As applications begin to deploy, development continues to ensure seamless onboarding with feature parity.</p><p> You can read more about the Telos EVM in <a href="https://docs.telos.net/evm/" target="_blank" rel="noreferrer"> our documentation here.</a></p></Article>
                    <Title>Decide Voter Mobile App</Title>
                    <Article><p>The Decide Voter mobile app by GoodBlock Technologies enables real world use of the Telos Decide engine. Available on <a href="https://play.google.com/store/apps/details?id=com.decidevoter" target="_blank" rel="noreferrer"> Google Play</a> and the <a href="https://play.google.com/store/apps/details?id=com.decidevoter" target="_blank" rel="noreferrer">Apple Store</a>, This intuitive application makes transparent and efficient decentralized governance accessible to everyone.</p></Article>
                    <Title>dStor</Title>
                    <Article>dStor is a decentralized data storage service with high levels of resiliency and security that is currently being developed by GoodBlock Technologies. As a pillar of Web 3.0, dStor simplifies the use of decentralized cloud storage by allowing fiat payments and managing data across the network to maximize speed and redundancy without needing customer management, as other decentralized storage platforms do. Thanks to dStor's ability to find high quality storage nodes within a user's geographic region, speed is as fast as centralized platforms. This enables groundbreaking opportunities for the crypto industry including scalable decentralized gaming, secure NFT assets, tamper-proof governance documentation, and more.</Article>
                    <Title>Telos Web Wallet 2.0</Title>
                    <Article><p>The release of the <a href="http://wallet.telos.net/" target="_blank" rel="noreferrer">Telos Web Wallet 2.0</a> introduced an easy to navigate interface for users to manage their Telos-based crypto assets in an intuitive application. Continued development will bring further functionality and ease of use for an all-in-one web wallet solution.</p></Article>
                    <Title>Teloscan Beta</Title>
                    <Article><p>Telos' version of the popular Ethereum block explorer was custom built with the Telos EVM in mind.Although development is in the early stages, users and dApps can already begin <a href="http://teloscan.io/" target="_blank" rel="noreferrer">exploring the Telos EVM</a> through an early iteration of this powerful tool.</p></Article>
                    <Title>Telos Knowledge Base & Support </Title>
                    <Article><p>Home of the official Telos support, the <a href="http://wallet.telos.net/" target="_blank" rel="noreferrer">Telos Knowledge Base</a> is integral to establishing Telos as the blockchain for mass adoption. It's easy to navigate support documentation and the familiar ticketing system removes the intimidation factor that many people associate with crypto and Web 3.0 technology.</p></Article>
                    <Title>Partnerships & Exchanges</Title>
                    <Article><p>The key to a thriving ecosystem is about more than just the technology that is offered. This is why the Telos Foundation builds partnerships with prominent industry projects and exchanges around the world.</p></Article>
                    <Bigtitle>Future</Bigtitle>
                    <Article>Telos is paving the way to mass adoption of Web 3.0 by developing innovative decentralized solutions with real world applications. The Telos Core Developers and Product Team will determine development priorities on a quarterly basis considering needs, opportunities, and available resources. Here’s what we’ve got in store for Telos in 2022 and beyond!</Article>
                    <Title>Telos Academy</Title>
                    <Article>Learn about all things Telos! As the industry heads towards mass adoption, we want to make it as easy as possible to welcome real world projects, users, and investors into the ecosystem. At the Telos Academy users will find educational materials on key aspects of Telos, along with a broader introduction to blockchain technology.</Article>
                    <Title>Telos EVM 2.0</Title>
                    <Article>Telos EVM is already miles ahead of current competing Solidity solutions, but development isn't slowing down. The Telos EVM 2.0 will guarantee that Telos continues to offer unmatched power for Ethereum based applications decades down the line.</Article>
                    <Title>T-Swaps 3.0</Title>
                    <Article>Continued development of the T-Swaps exchange will ensure that this platform remains a central part of DeFi on Telos. A sleek user interface, zoned liquidity pools, increased liquidity, and other new features are key items on the roadmap for this innovative trading platform.</Article>
                    <Title>Telos dApp Incentive Program</Title>
                    <Article>In order to ensure that Telos is home to some of the most innovative and thriving economies in the industry, we're launching a dApp Incentive Program for the Telos network. This initiative will offer financial, technical, and business development support to projects who will play an integral role in the future of the blockchain industry.</Article>
                    <Title>Telos SureProfit</Title>
                    <Article>This groundbreaking tool is set to revolutionize DeFi, empowering traders to ensure that their trades will be successful before transacting. SureProfit will allow users to check their balances just before finalizing a transaction and cancel any that would result in a net loss for the end user. When paired with near feeless transactions, this powerful tool makes it possible to begin building wealth with as little as a dollar.</Article>
                    <Title>Satoshi Tokens (SATs)</Title>
                    <Article>A fractionalized version of Bitcoin that is so intuitive your grandma can use it! Why buy a coffee for 0.00005441 Bitcoin when you can buy it for 5441 SATs? SATs allow for price tags that actually make sense to a lay person. When paired with near feeless transactions at 10,000 TPS and the user-friendly UI of the Telos Web Wallet, real world crypto transactions have never been easier. SATs are bridged to the Bitcoin blockchain and represent wrapped BTC tokens. They can also be converted directly between SAT and BTC without using an exchange or swap contract.</Article>
                    <Title>T-Bond NFTs UI</Title>
                    <Article>The T-Bond NFTs technology was one of the most innovative DeFi developments of 2021. The new T-Bonds UI will open up this powerful piece of tooling to real world initiatives with no developer resources. As the world reimagines what our traditional financial systems look like, T-Bond NFTs are set to play a major role in the future of our economies.</Article>
                    <Title>Teloscan & Telos Block Explorer</Title>
                    <Article>As Telos EVM development continues, Teloscan will offer applications and users a suite of tools that compete with other leading block explorers. In addition to Teloscan for Telos EVM, an official block explorer for Telos native is also under development. Both of these tools will maximize the utility of various Telos features and ensure a seamless user experience for navigating the history of the Telos ecosystem at scale.</Article>
                    <Title>T-ID</Title>
                    <Article>An identity solution combining two large needs for identity. The first is the need to determine the uniqueness of an individual account's identity, and second is the ability for a user to have information verified by third-parties without leaking private information. Users will be able to share select information with apps while keeping control of what they share. Certificates issued will be linked to these details. This product will be crucial as the industry evolves and the needs of governance and DeFi become more complex. The Telos Core Developers have partnered with original developers of the Estonian National Identity system, the first and most successful blockchain identity system in the world.</Article>
                    <Title>Mural NFT Market & Gallery</Title>
                    <Article>With extremely low minting costs, no front-running, and a low carbon footprint, the Telos EVM is set to be the most artist-friendly platform across the industry. The Mural NFT Market & Gallery is a key piece in facilitating this thriving creative ecosystem. Buy, sell, trade, and display your NFT collections with ease and grow your decentralized artwork portfolio.</Article>
                    <Title>Telos Private</Title>
                    <Article>Telos Private will enable completely private “zero knowledge proofs” (ZK) transactions for Telos users. Telos Private will employ a separate side-chain with modified code to allow ZK transactions and bridges to and from Telos. The side-chain will be decentralized and run by the Telos block producers, selected through user voting.</Article>
                    <Title>Decide Voter+</Title>
                    <Article>Powerful governance is a pillar of the Telos ecosystem, but only certain governance features are currently available for users with no developer resources. Decide Voter+ solves this by bringing advanced blockchain governance to real world projects. This includes features such as legislation amendments, board election management, and more.</Article>
                    <Title>Telos Profiles 2.0</Title>
                    <Article><p><a href="https://app.telos.net/profiles/myProfile/" target="_blank" rel="noreferrer">Telos Profiles</a>, your passport to Web 3.0, is a decentralized user profile service built to facilitate a more engaging ecosystem. It allows users to set a custom avatar and public persona associated with their account. Projects can then utilize this as a network-wide profile solution for familiar in-app experiences. Telos Profiles 2.0 will offer an updated UI and easy to navigate tooling, unlocking the full potential of decentralized user profiling.</p></Article>
                    <Title>Telos Location</Title>
                    <Article>Telos Location allows proof-of-location using the Telos blockchain, while incentivizing users to carry out “location mining” for the system. With this product, anyone will be able to verify that they were in a specific location at a specific time. This opens up a world of possibilities for dApps, DAOs, and other decentralized initiatives. Note that Telos Location is a long-term development goal and is not expected to be completed during 2022.</Article>
                    <PageTitle>We hope you enjoyed the new Telos Roadmap!</PageTitle>
                    <Article><p>Were you blown away by all the incredible work and groundbreaking projects coming to Telos over the next year? There’s lots to get excited about for NFT aficionados, DeFi wizards, and decentralization enthusiasts.</p><p>Remember that you can tune into our <a href="https://www.youtube.com/watch?v=mLhbdy6CqYM" target="_blank" rel="noreferrer">Telos Tuesday AMA with the core team on Jan. 11th 2022</a> and get answers to all your questions. We pride ourselves on being transparent and friendly with our community - and we hope to see you there!</p><p>From then on, we’ll bring back technical updates twice a month so that you can stay up to date about all these awesome initiatives. Stay tuned for more. And thanks for being one of our Telos founders - here’s to an amazing year!</p></Article>
                    <Title></Title>
                    <Footer />
                </Section>
        </ThemeProvider>
    )
}

export default Roadmap;