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
import RecentlyAddedButton from "./RecentlyAddedButton";
import HourFourButton from './HotFourButton';

class Landing extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <Nav /> 
                <Hero />
                <SaleThumbnailSection />
                <HotFour />
                <GridImage />
                <HourFourButton />
                <NewUsers history={this.props.history} />
                <RecentlyAdded />
                <GridImageSix />
                <RecentlyAddedButton />
                <DontForget/>
                <Footer />
            </div>
        )
    }
}

export default Landing;