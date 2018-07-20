import React from 'react';

export default class One extends React.Component {
    state = {
        count: 0
    }

    handleClick = (e) => {
        console.log(e.currentTarget);
        
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick} >Increase Count</button>
            </div>
        )
    }
}

// export default One;