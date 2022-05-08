import React, { useEffect } from "react";
import { Tab, Box, Container, Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab" ; 

const MenuContext = React.createContext({
    menu: [],
    setMenu: () => {}
})

export { MenuContext }