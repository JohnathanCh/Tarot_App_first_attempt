import React from 'react';
import CardInfo from "./CardInfo";


export default class CardImage extends React.Component {

    state = {
        showInfo: false
    }

    getImage = cardName => {
        let formattedName = cardName
        .split(" ")
        .join("_")

            // Put relative path in here
        let image = require(`../../Rider-Waite/${formattedName}.png`) 

        return image
    }

    handleClick = (e) => {
        console.log(e.currentTarget);
        
    }

    render() {
        console.log("CardImage", this.props);
        
        return (
            <div>
                <img className="card-image" src={this.getImage(this.props.card.name)} alt="No Image Found" onClick={this.handleClick} />


            </div>
        )
    }
}