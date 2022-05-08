import { LensTwoTone } from "@mui/icons-material";
import React from "react";

import Navbar from "../component/navbar";
import MyTab from "../component/tab";

import data from '../data/data.json' ;

class Home extends React.Component {

    constructor(props: any) {
        super(props) ;  


    }

    state = {
        menu_data: Object,
    } ;

    componentDidMount() {
        const menu_data = this.fetchData()

        this.setState({
            menu_data: menu_data
        })
    }

    fetchData() {

        let types = data.map((v, i) => v["type"]) ;

        types = types.filter((v: Object, i: Number, arr: Array<Object>) => {
            return arr.indexOf(v) === i ;
        })

        const menu_data: any = {} ;
        types.map((tv, idx: Number) => {
            menu_data[tv] = data.filter((dv, i) => dv["type"] == tv) ;
        })  
        return menu_data
    }



    render() {
        return (
            <div>
                <Navbar />
                <MyTab menu_data={this.state.menu_data} />
            </div>
        )
    }
}

export default Home