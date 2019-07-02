import React from "react";
import Nav from "./Nav";
import SaleThumbnailSection from "../../components/landingpage/ShirtThumbnailGrid.js/SaleThumbnailSection";
import Hero from "./Hero";
import HotFour from "./HotFour";
import NewUsers from './NewUsers';
import RecentlyAdded from './RecentlyAdded';
import DontForget from './DontForget';
import Footer from "./Footer";
import GridImage from "./ShirtThumbnailGrid.js/GridImage";
import GridImageSix from "./ShirtThumbnailGrid.js/GridImageSix";

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
                <GridImage />
                <NewUsers />

                <RecentlyAdded />
                <GridImageSix />
                <DontForget/>
                <Footer />
            </div>
        )
    }
}

export default Landing;