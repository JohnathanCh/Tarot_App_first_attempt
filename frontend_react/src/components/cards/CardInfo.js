import React from 'react';
import { connect } from 'react-redux';
// import { selectCard } from '../../'
import './cardStyles.css';
import { selectCardAction } from '../../store/allCards/actions';

const CardInfo = (props) => {    
    
        console.log("Card Component", props.selectCard);

        // props.selectCard(props.card)
        const handleClick = (e) => {
            console.log(props.card);
            props.selectCard(props.card)
            
        }

        return (
            <div className="ui card centered" id="my-card" onClick={handleClick} style={{"background-image": "url('https://blog-cdn.californiapsychics.com/blog/wp-content/blogs.dir/1/files/2018/07/weekly-tarot-reading_20180722_600x320.jpg')" }}>
                <h1>{props.card.name}</h1>
                <h3>{props.card.type} Arcana</h3>
                <p><strong>Meaning Upright:</strong> {props.card.meaning_up}</p>
                <p><strong>Meaning Reversed:</strong> {props.card.meaning_rev}</p>
                <p><strong>Description:</strong> {props.card.desc} </p>

            </div>
        )
    
    

}

// console.log("Card Component", this.props);

// const mapStateToProps = (state) => ({
//     cards: state.cards
    
// })

const mapDispatchToProps = (dispatch) => ({
    selectCard: (card) => { 
        console.log(card);
        
        dispatch(selectCardAction(card))
    }
})

export default connect(null, mapDispatchToProps)(CardInfo);