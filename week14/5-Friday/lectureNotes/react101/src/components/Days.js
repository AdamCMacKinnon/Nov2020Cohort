import React, { Component } from 'react'

class Days extends Component {
    render() {
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        let daysArr = days.map(day =>{
            return <li>{day}</li>
        })
        return <>
        Days of the Week
        <ul>
        {daysArr}
        </ul>
        </>;
    }
}

export default Days;