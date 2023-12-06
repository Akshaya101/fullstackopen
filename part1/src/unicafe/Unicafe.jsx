import React, { useState } from 'react'
import Statistics from './Statistics'

const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <button name='good' onClick={() => setGood(good + 1)}>good</button>
                <button name='neutral' onClick={() => setNeutral(neutral + 1)}>neutral</button>
                <button name='bad' onClick={() => setBad(bad + 1)}>bad</button>
            </div>
            <h1>statistics</h1>
            {
                good || bad || neutral ? <><Statistics good={good} neutral={neutral} bad={bad} /></> : 'No feedback given'
            }
        </div>
    )
}

export default Unicafe