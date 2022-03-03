import {useState, useEffect} from "react";
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {AnimatePresence} from 'framer-motion';
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import {EcosystemData} from "../data/EcosystemData";



const Section = styled.div`
    width: 100%;
    height: 50vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 70vh;
    }
`;

const Title = styled.div`
    font-size: 62px;
    width: 80%;
    height: 45vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    
`;

const Button = styled.button`
    
    border: none;
    background: transparent;
    color: white;
    border-radius: 1rem;
    border: 2px solid aqua;
    margin: 3px;
    cursor: pointer;

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
    height: 20vh;
    background: black;
    
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
        } /* else if (activePlatform === 3){
            const filtered = platforms.filter(el => el.collection === "NFT"); 
            setFiltered(filtered);
        } else if (activePlatform === 4){
            const filtered = platforms.filter(el => el.collection === "COMING SOON"); 
            setFiltered(filtered);
        } */ else if (activePlatform === 5){
            const filtered = platforms.filter(el => el.collection === "EXCHANGE"); 
            setFiltered(filtered);
        } /* else if (activePlatform === 6){
            const filtered = platforms.filter(el => el.collection === "INFORMATION"); 
            setFiltered(filtered);
        } else if (activePlatform === 7){
            const filtered = platforms.filter(el => el.collection === "DEVELOPERS"); 
            setFiltered(filtered);
        } else if (activePlatform === 8){
            const filtered = platforms.filter(el => el.collection === "WALLETS"); 
            setFiltered(filtered);
        } else if (activePlatform === 9){
            const filtered = platforms.filter(el => el.collection === "BLOCK EXPLORER"); 
            setFiltered(filtered);
        } else if (activePlatform === 10){
            const filtered = platforms.filter(el => el.collection === "DEFI"); 
            setFiltered(filtered);
        } else if (activePlatform === 11){
            const filtered = platforms.filter(el => el.collection === "SOCIAL"); 
            setFiltered(filtered);
        } else if (activePlatform === 12){
            const filtered = platforms.filter(el => el.collection === "GAMES"); 
            setFiltered(filtered);
        } */
        
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
       </FilterContainer> 
    )
}

const Wrapper = styled(motion.div)`
    height: 450px;
    width: 250px;
    border: 1px solid whitesmoke;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`;

const ImageContainer = styled.div`
    height: 50%;
    width: 100%;
    background-color: grey;
    border-radius: 20px 20px 0 0;
    img{
        width: 100%;
        height: 80%;
        object-fit: contain;
    }
`;

const FilterSection = styled(motion.div)`
    width: 100%;
    height: auto;
    background: ${props => props.theme.body};
    
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
        layout>
            <ImageContainer>
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
        
        setPlatforms(EcosystemData);
        setFiltered(EcosystemData); 
    }


    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
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