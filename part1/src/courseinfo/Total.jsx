import React from 'react'

function getTotal(parts) {
    let sum = 0;
    for (let i = 0; i < parts.length; i++) {
        sum = sum + parts[i].exercise
    }
    return sum
}

const Total = (props) => {
    let sum = getTotal(props.parts)
    return (
        <div>
            <p>Number of exercises {sum}</p>
        </div>
    )
}

export default Total