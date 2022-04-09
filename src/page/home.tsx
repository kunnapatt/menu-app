import React from "react";

import Navbar from "../component/navbar";
import MyTab from "../component/tab";

class Home extends React.Component {

    constructor(props: any) {
        super(props) ;  
        this.state = {
            aaa: false
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <MyTab />
            </div>
        )
    }
}

export default Home