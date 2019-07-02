import React from "react";

class NewUsers extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>FOR NEW USERS ONLY</h1>
                <p>ENJOY AND ADDITIONAL 10% OFF YOUR ORDER</p>
                <p>WHEN YOU REGISTER TODAY</p>

                <form>
                    <input 
                        type="text"
                        placeholder="Theodor Seuss Geisel"
                        />
                          <input 
                        type="text"
                        placeholder="TheoderSeuss@gmail.com"
                        />
                          <input 
                          placeholder="1Fish2Fish"
                        type="text"
                        
                        />
                </form>
                
            </div>
        );
    }
}

export default NewUsers;