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
        
        this.setState({
            showInfo: !this.state.showinfo
        })
        
    }

    render() {
        console.log("CardImage", this.props);
        
        return (
            <div>

                <img className="card-image" src={this.getImage(this.props.card.name)} alt="No Image Found" onClick={this.handleClick} />

               {/* {this.state.showInfo === true ? <CardInfo card={this.props.card} /> : null } */}

            </div>
        )
    }
}