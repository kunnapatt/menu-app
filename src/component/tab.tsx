import React, { useEffect } from "react";
import { Tab, Box, Container, Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab" ; 

import { MyTabPanel, MyTabPanelLab } from "./tabpanel";

const labels = ["desert", "sushi", "beverage", "rice", "aaa", "bbbb", "CCC"]

interface IMyTab {
    menu_data: Object
}

const MyTab = (props: IMyTab) => {

    const [value, setValue] = React.useState('1') ;
    const [labels, setLabels] = React.useState([""]) ;
    const [checkRender, setCheckRender] = React.useState(false) ;

    const handleChange = (e: React.SyntheticEvent, v: string) => {
        setValue(v) ;
    }

    const handleData = () => {
        if (Object.keys(props.menu_data).length > 0) {
            setLabels(Object.keys(props.menu_data)) ;
        }
    }
    
    const createTabPanel = () => {

        let component = [] ;
        let cnt = 0 ;
        for (const [key, value] of Object.entries(props.menu_data)) {
            component.push(
                <MyTabPanelLab key={key} index={key} value={`${cnt + 1}`} data={value}></MyTabPanelLab>
            )
            cnt = cnt + 1;
        }


        return (
            <div>
                <Container>
                    {component.map((v, i) => {
                        return (v) ;
                    })}
                </Container>
            </div>
        )
    }

    useEffect(() => {
        handleData()
    }, [props.menu_data])

    return (
        <TabContext
            value={value}
        >
            <Box
                sx={{ borderBottom: 1, borderColor: 'divider'}}
            >
                <TabList
                    onChange={handleChange}
                    aria-label="lab api tab menu"
                    scrollButtons={true}
                    allowScrollButtonsMobile
                    variant="scrollable"
                >
                    {
                        labels.map((v, i) => {
                            return (
                                <Tab label={v} value={`${i+1}`} key={i+1}/>
                                ) ;
                            }
                        )
                    }
                    
                </TabList>
            </Box>

            {labels !== [""] ?  createTabPanel(): <div></div>}

        </TabContext>
    )

}

export default MyTab ;