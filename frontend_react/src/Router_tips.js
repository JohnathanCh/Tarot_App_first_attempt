// import React from 'react';
// import { Link } from "react-router-dom";

// export default class Layout extends React.Component {
//     navigate() {
//         this.props.history.pushState(null, "/featured");
//     }

//     render() {
//         return (
//             <div>
//                 <h1>KillerNew.net</h1>
//                 {/* renders the props which now include Router Props */}
//                 {this.props.children}
//                 {/* This will render a link on the page as a button that will render the Archives Component */}
//                 <Link to="Archives" class="button">Archives</Link>
//                 {/* This creates a button that calls on the navigate above that pushes the user to the featured component */}
//                 <button onlick={this.navigate.bind(this})} > featured</button>
//             </div>
//         )
//     }
// }