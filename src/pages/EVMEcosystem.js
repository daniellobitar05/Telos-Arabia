import {useState, useEffect} from "react";
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkR} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeaderNoHome from "../components/NavBar/NavBarNoHome";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import {EVMEcosystemData} from "../data/EVMEcosystemData";



const Section = styled.div`
    width: 100%;
    height: 20vh;
    background: linear-gradient(90deg, rgba(18,12,128,1) 0%, rgba(142,8,194,1) 80%, rgba(166,36,217,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 100vh;
    }
`;

const Title = styled.div`
    font-size: 58px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    align-items: center;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const Button = styled.button`
    
    font-size: 16px;
    background: transparent;
    color: white;
    border-radius: 1rem;
    border: 2px solid aqua;
    padding: 7px 12px;
    margin: 0 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:active{
        background: rgb(65, 98, 168);
        color: white;
    }
    @media screen and (max-width: 768px){
        margin: 0 10px;
        font-size: 10px;
        padding: 5px 15px;
        
        
    }
`;

const FilterContainer = styled.div`
    width: 100%;
    height: 10vh;
    background: linear-gradient(90deg, rgba(18,12,128,1) 0%, rgba(142,8,194,1) 80%, rgba(166,36,217,1) 100%);
    
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        /* display: grid;
        grid-template-columns: 1fr 1fr; */
        padding-top: 0px;
        transform: rotate(90deg) translate(150%, 225%);
        height: 10vh;
        position: absolute;
        
        
        
        
    }
`;

function Filter({setActivePlatform, activePlatform, setFiltered, platforms}){

    useEffect(() => {
        if (activePlatform === 0){
            setFiltered(platforms); 
            return;
        } else if (activePlatform === 1){
            const filtered = platforms.filter(el => el.collection === "EVMMEME"); 
            setFiltered(filtered);
        } else if (activePlatform === 2){
            const filtered = platforms.filter(el => el.collection === "EVMNFT"); 
            setFiltered(filtered);
        } else if (activePlatform === 3){
            const filtered = platforms.filter(el => el.collection === "EVMCOMINGSOON" || el.collection2 === "EVMCOMINGSOON"); 
            setFiltered(filtered);
        } else if (activePlatform === 4){
            const filtered = platforms.filter(el => el.collection === "EVMEXCHANGE"); 
            setFiltered(filtered);
        } else if (activePlatform === 5){
            const filtered = platforms.filter(el => el.collection === "EVMDEVELOPERS"); 
            setFiltered(filtered);
        } else if (activePlatform === 6){
            const filtered = platforms.filter(el => el.collection === "EVMWALLETS"); 
            setFiltered(filtered);
        } else if (activePlatform === 7){
            const filtered = platforms.filter(el => el.collection === "EVMBLOCKEXPLORER" || el.collection2 === "EVMBLOCKEXPLORER"); 
            setFiltered(filtered);
        } else if (activePlatform === 8){
            const filtered = platforms.filter(el => el.collection === "EVMDEFI" || el.collection2 === "EVMDEFI"); 
            setFiltered(filtered);
        } else if (activePlatform === 9){
            const filtered = platforms.filter(el => el.collection === "EVMTOOLS" || el.collection2 === "EVMTOOLS"); 
            setFiltered(filtered);
        } 
        
    }, [activePlatform])

    return(
       <FilterContainer>
           <Button onClick={() => setActivePlatform(0)}>EVM</Button>
           <Button onClick={() => setActivePlatform(1)}>MEME</Button>
           <Button onClick={() => setActivePlatform(2)}>NFT</Button>
           <Button onClick={() => setActivePlatform(3)}>COMING SOON</Button>
           <Button onClick={() => setActivePlatform(4)}>EXCHANGE</Button>
           <Button onClick={() => setActivePlatform(5)}>DEVELOPERS</Button>
           <Button onClick={() => setActivePlatform(6)}>WALLETS</Button>
           <Button onClick={() => setActivePlatform(7)}>BLOCK EXPLORER</Button>
           <Button onClick={() => setActivePlatform(8)}>DEFI</Button>
           <Button onClick={() => setActivePlatform(9)}>TOOLS</Button>
           <LinkR to="/NativeEcosystem"><Button><KeyboardArrowLeftIcon />NATIVE</Button></LinkR>
       </FilterContainer> 
    )
}

const Wrapper = styled(motion.a)`
    height: 450px;
    width: 250px;
    border: 1px solid purple;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`;

const ImageContainer = styled.a`
    height: 50%;
    width: 100%;
    background-color: indigo;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 90%;
        height: 90%;
        object-fit: contain;
    }
`;

const FilterSection = styled(motion.div)`
    width: 100%;
    height: auto;
    background: linear-gradient(135deg, rgba(18,12,128,1) 0%, rgba(142,8,194,1) 58%, rgba(166,36,217,1) 100%);
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    padding: 40px;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    width: 80%;
    height: 50%;
    
`;

const Type = styled.div`
    height: 20%;
    width: 100%;
    color: white;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    
`;

const Name = styled.div`
    height: 20%;
    width: 100%;
    color: aqua;
    font-size: 20px; 
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;   
`;

const Description = styled.div`
    height: 60%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    font-size: 14px;
`;

function Platforms ({el}){
    return(
        
        <Wrapper animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        whileHover={{scale: 1.025}}
        whileTap={{scale: 0.95}}
        layout href={el.link} target="_blank" rel="noreferrer">
            <ImageContainer >
            {/* <TextWrapper>
            <Title>{el.title}</Title>
            <Platform>{el.collection}</Platform>
            <Price>{el.price}</Price>
            </TextWrapper>
            <LogoWrapper><img src={el.logo} alt="" key={el.id}/></LogoWrapper> */}
            <img src={el.image} alt="" key={el.title}/>
            </ImageContainer>
            <TextContainer>
                <Type>{el.type}</Type>
                <Name>{el.name}</Name>
                <Description>{el.desc}</Description>
            </TextContainer>
        </Wrapper>
        
    )
}


const EVMEcosystem = () => {

    const [platforms, setPlatforms] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activePlatform, setActivePlatform] = useState(0);

    useEffect(() => {
        fetchPlatforms();
    }, []);

    

    const fetchPlatforms = () => {
        
        setPlatforms(EVMEcosystemData);
        setFiltered(EVMEcosystemData); 
    }


    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <HeaderNoHome theme={theme} setTheme={setTheme} />
                <Section id="ecosystem">
                    <Title>Explore the Telos Project Ecosystem</Title>
                </Section>
                <div id="filter">
                    <Filter platforms={platforms} setFiltered={setFiltered} activePlatform={activePlatform} setActivePlatform={setActivePlatform} /> 
                    </div>
                    <FilterSection layout>
                    <AnimatePresence>
                    {filtered.map((el) => {
                        return <Platforms key={el.id} el={el}/>;
                    })}
                    </AnimatePresence>
                    </FilterSection>
        </ThemeProvider>
    )
}

export default EVMEcosystem;