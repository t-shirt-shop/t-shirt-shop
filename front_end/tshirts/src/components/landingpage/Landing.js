import React from "react";
import Nav from "./Nav";
import SaleThumbnailSection from "../../components/landingpage/ShirtThumbnailGrid.js/SaleThumbnailSection";
import Hero from "./Hero";
import HotFour from "./HotFour";
import NewUsers from './NewUsers';
import RecentlyAdded from './RecentlyAdded';
import DontForget from './DontForget';

class Landing extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <Nav /> 
                <Hero />


                {/* Leslie, I'll put my items below this line for now. */}
                <SaleThumbnailSection />

                {/*HOT FOUR BANNER NOT THE GRID THAT IS STILL ALL YOU BRYCE :)*/}
                <HotFour />

                <NewUsers />

                <RecentlyAdded />
                <DontForget/>
            </div>
        )
    }
}

export default Landing;