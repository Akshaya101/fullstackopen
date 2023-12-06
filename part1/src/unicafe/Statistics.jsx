import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, bad, neutral }) => {
    return (
        <div>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={good + neutral + bad} />
            <StatisticLine text='average' value={(good + neutral + bad) / 3} />
            <StatisticLine text='positive' value={((good + neutral) / (good + neutral + bad)) * 100} />
        </div>
    )
}

export default Statistics