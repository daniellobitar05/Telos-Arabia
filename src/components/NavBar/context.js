import React from "react";

const initialState = {
  active: "closed",
  setActive: () => {},
};

const initialState2 = {
    active: "closed",
    setActive: () => {},
  };

const initialState3 = {
    active: "closed",
    setActive: () => {},
  };

const initialState4 = {
    active: "closed",
    setActive: () => {},
};

const initialState5 = {
    active: "closed",
    setActive: () => {},
};

export const MenuContextAbout = React.createContext(initialState);
export const MenuContextExplore = React.createContext(initialState2);
export const MenuContextLearn = React.createContext(initialState3);
export const CardContextBuild = React.createContext(initialState4);
export const MenuContextBuy = React.createContext(initialState5);