import React from "react";
import Nav from "./Nav";
import SaleThumbnailSection from "../../components/landingpage/ShirtThumbnailGrid.js/SaleThumbnailSection";
import Hero from "./Hero";

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
            </div>
        )
    }
}

export default Landing;