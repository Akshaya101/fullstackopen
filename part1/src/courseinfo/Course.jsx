import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                part: 1,
                name: 'Fundamentals of React',
                exercise: 10
            }, {
                part: 2,
                name: 'Using props to pass data',
                exercise: 7
            }, {
                part: 3,
                name: 'State of a component',
                exercise: 14
            }
        ]
    }
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course