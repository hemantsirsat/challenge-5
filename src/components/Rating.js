import React from "react";
import "./css/style.css";
import star from "./images/icon-star.svg";

export default class Rating extends React.Component {
    render(){
        return(
            <div className="rating-container">
                <div className="star">
                    <img 
                        src={star}
                        alt="star"
                    />
                    <img 
                        src={star}
                        alt="star"
                    />
                    <img 
                        src={star}
                        alt="star"
                    />
                    <img 
                        src={star}
                        alt="star"
                    />
                    <img 
                        src={star}
                        alt="star"
                    />
                </div>
                <p
                    className="rate"
                >
                    {this.props.rate}
                </p>
            </div>
        )
    }
}