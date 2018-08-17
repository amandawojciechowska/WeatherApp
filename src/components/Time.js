import React from "react";

// class Time extends React.Component{
//     render(){
//         const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         const currentDay = this.props.date.getDay();
//         const currentMonth = (this.props.date.getMonth()+1);
//
//         return (
//             <div className="date-container">
//                 <div>
//                     <p className="time">{this.props.date.toLocaleTimeString()}</p>
//                     <p className="date">{days[currentDay]}, {this.props.date.getDate()} {months[currentMonth]}</p>
//                 </div>
//             </div>
//         )
//     }
// }


const Time = (props) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const currentDay = props.date.getDay();
        const currentMonth = (props.date.getMonth()+1);

        return (
            <div className="date-container">
                <div>
                    <p className="time">{props.date.toLocaleTimeString()}</p>
                    <p className="date">{days[currentDay]}, {props.date.getDate()} {months[currentMonth]}</p>
                </div>
            </div>
        )
};


export default Time;