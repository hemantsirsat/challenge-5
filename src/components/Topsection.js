import React from "react";
import "./css/style.css";
import Rating from "./Rating.js";

export default class Topsection extends React.Component {
    render(){
        return(
            <div className="top-section">
                <div className="left-section">
                    <p
                        className="heading"
                    >
                        10,000+ of our users love our products.
                    </p>
                    <p
                        className="description"
                    >
                    We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
                    </p>
                </div>
                <div className="right-section">
                    <div className="rating1">
                        <Rating 
                            rate="Rated 5 Stars in Reviews"
                        />
                    </div>
                    <div className="rating2">
                        <Rating 
                            rate="Rated 5 Stars in Report Guru"
                        />
                    </div>
                    <div className="rating3">
                        <Rating 
                            rate="Rated 5 Stars in BestTech"
                        />
                    </div>
                </div>
            </div>
        )
    }
}