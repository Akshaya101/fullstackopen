import React from 'react'

const Part = ({ name, exercise }) => {
    return (
        <div>
            <p>{name} {exercise}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        props.parts.map((course) => {
            return <Part key={course.part} name={course.name} exercise={course.exercise} />
        })
    )
}

export default Content