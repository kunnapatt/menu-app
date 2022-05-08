import React, { useEffect } from "react";
import { Typography, List, Stack } from "@mui/material";
import { TabPanel } from "@mui/lab" ;

import MyList from "../component/listitem";

interface ITabPanel {
    children ?: React.ReactNode ;
    index: string ;
    value: string ;
    data ?: ([] | undefined) ;
}

const MyTabPanel = (props: ITabPanel) => {

    const { children, index, value, ...other } = props ; 

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`type-tabpanel-${index}`}
            aria-labelledby={`type-tab-${index}`}
        >

        </div>
    ) ;
}

const MyTabPanelLab = (props: ITabPanel) => {
    const { children, index, value, data, ...other } = props ;

    const [menu, setMenu] = React.useState([]);
    const [dense, setDense] = React.useState(false) ;

    useEffect(() => {
        console.log("ok") ;
        console.log(data) ;
        if (data !== undefined) {
            setMenu(data);
        } ;
    }, [data])
    
    

    return (
        <TabPanel
            value={`${value}`}
        >
            <Stack spacing={2}>
                {/* <List dense={dense}> */}
                    {/* <div> */}
                        {menu.map((v: any, i: any) => {
                            return (
                                <MyList key={i} img_path={v.file_path} name="" price={v.price} note={v.note}></MyList>
                            ) ;
                        })}
                    {/* </div> */}
                {/* </List> */}
            </Stack>
        </TabPanel>
    ) ;
}

export { MyTabPanel, MyTabPanelLab } ;