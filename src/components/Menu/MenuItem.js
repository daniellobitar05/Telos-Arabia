import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const BuyIcon = styled(StorefrontIcon)`
  transform: scale(1.3);
  padding: 8px;
  
`;

const BuildIcon = styled(ConstructionIcon)`
  transform: scale(1.3);
  padding: 8px;
`;

const LearnIcon = styled(SchoolIcon)`
  transform: scale(1.3);
  padding: 8px;
`;

const ExpIcon = styled(ExploreIcon)`
  transform: scale(1.3);
  padding: 8px;
`;

const AboutIcon = styled(HelpCenterIcon)`
  transform: scale(1.3);
  padding: 8px;
`;

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

//const pages = ["Buy", "Build", "Learn", "Explore", "About"];

const pages = ["شراء","إنشاء","تعلم","استكشاف","حول"];

const icons = [<BuyIcon />, <BuildIcon />, <LearnIcon />, <ExpIcon />, <AboutIcon />];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-placeholder" style={style}>{pages[i]}</div>
      <div className="icon-placeholder" style={style}>{icons[i]}</div>
      
    </motion.li>
  );
};
