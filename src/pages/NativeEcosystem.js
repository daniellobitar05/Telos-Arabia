import {useState, useEffect} from "react";
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeaderNoHome from "../components/NavBar/NavBarNoHome";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import {NativeEcosystemData} from "../data/NativeEcosystemData";



const Section = styled.div`
    width: 100%;
    height: 20vh;
    background: linear-gradient(145deg, #00008b 0%, rgba(88,9,121,1) 90%, rgba(68,6,94,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 70vh;
    }
`;

const TopWrapper = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 58px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    align-items: center;
    text-align: right;
    
`;

const Button = styled.button`
    font-size: 12px;
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
    background: linear-gradient(145deg, #00008b 0%, rgba(88,9,121,1) 90%, rgba(68,6,94,1) 100%);
    
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
            const filtered = platforms.filter(el => el.collection === "PARTNERS"); 
            setFiltered(filtered);
        } else if (activePlatform === 2){
            const filtered = platforms.filter(el => el.collection === "PAYMENTS"); 
            setFiltered(filtered);
        } else if (activePlatform === 3){
            const filtered = platforms.filter(el => el.collection === "NFT"); 
            setFiltered(filtered);
        } else if (activePlatform === 4){
            const filtered = platforms.filter(el => el.collection === "COMINGSOON"); 
            setFiltered(filtered);
        } else if (activePlatform === 5){
            const filtered = platforms.filter(el => el.collection === "EXCHANGE"); 
            setFiltered(filtered);
        } else if (activePlatform === 6){
            const filtered = platforms.filter(el => el.collection === "INFORMATION"); 
            setFiltered(filtered);
        } else if (activePlatform === 7){
            const filtered = platforms.filter(el => el.collection === "DEVELOPERS" || el.collection2 === "DEVELOPERS"); 
            setFiltered(filtered);
        } else if (activePlatform === 8){
            const filtered = platforms.filter(el => el.collection === "WALLETS" || el.collection2 === "WALLETS"); 
            setFiltered(filtered);
        } else if (activePlatform === 9){
            const filtered = platforms.filter(el => el.collection === "BLOCKEXPLORER"); 
            setFiltered(filtered);
        } else if (activePlatform === 10){
            const filtered = platforms.filter(el => el.collection === "DEFI" || el.collection2 === "DEFI"); 
            setFiltered(filtered);
        } else if (activePlatform === 11){
            const filtered = platforms.filter(el => el.collection === "SOCIAL" || el.collection2 === "SOCIAL"); 
            setFiltered(filtered);
        } else if (activePlatform === 12){
            const filtered = platforms.filter(el => el.collection === "GAMES" || el.collection2 === "GAMES"); 
            setFiltered(filtered);
        }
        
    }, [activePlatform])

    return(
       <FilterContainer>
           <Button onClick={() => setActivePlatform(0)}>NATIVE</Button>
           <Button onClick={() => setActivePlatform(1)}>PARTNERS</Button>
           <Button onClick={() => setActivePlatform(2)}>PAYMENTS</Button>
           <Button onClick={() => setActivePlatform(3)}>NFT</Button>
           <Button onClick={() => setActivePlatform(4)}>COMING SOON</Button>
           <Button onClick={() => setActivePlatform(5)}>EXCHANGE</Button>
           <Button onClick={() => setActivePlatform(6)}>INFORMATION</Button>
           <Button onClick={() => setActivePlatform(7)}>DEVELOPERS</Button>
           <Button onClick={() => setActivePlatform(8)}>WALLETS</Button>
           <Button onClick={() => setActivePlatform(9)}>BLOCK EXPLORER</Button>
           <Button onClick={() => setActivePlatform(10)}>DEFI</Button>
           <Button onClick={() => setActivePlatform(11)}>SOCIAL</Button>
           <Button onClick={() => setActivePlatform(12)}>GAMES</Button>
           <LinkR to="/EVMEcosystem"><Button><KeyboardArrowLeftIcon />EVM</Button></LinkR>
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
    background-color: #8a2be2;
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
    background: linear-gradient(135deg, #00008b 0%, rgba(88,9,121,1) 65%, rgba(68,6,94,1) 100%);
    
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
        whileHover={{scale: 1.025}}
        whileTap={{scale: 0.95}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
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


const Ecosystem = () => {

    const [platforms, setPlatforms] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activePlatform, setActivePlatform] = useState(0);

    useEffect(() => {
        fetchPlatforms();
    }, []);

    

    const fetchPlatforms = () => {
        
        setPlatforms(NativeEcosystemData);
        setFiltered(NativeEcosystemData); 
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

export default Ecosystem;