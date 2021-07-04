import React from "react";
import "./css/style.css";

export default class Review extends React.Component {
    render(){
        return(
            <div className="review-card">
                <div className="review-content">
                    <div className="profile">
                        <img 
                            src={this.props.picture}
                            alt="profile"
                        />
                        <div className="details">
                            <p className="name">
                                {this.props.name}
                            </p>
                            <p className="designation">
                                Verified Buyer
                            </p>
                        </div>
                    </div>
                    <div>
                        <p class="review">  
                            "
                                {this.props.review}
                            "

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}