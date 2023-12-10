import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const SectionTitle = (props) => (
  <h1>{props.text}</h1>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) == 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine value={props.good} text="good"/>
        <StatisticLine value={props.neutral} text="neutral"/>
        <StatisticLine value={props.bad} text="bad"/>
        <StatisticLine value={props.good + props.neutral + props.bad} text="all"/>
        <StatisticLine value={(props.good-props.bad)/(props.good + props.neutral + props.bad)} text="average"/>
        <StatisticLine value={(props.good/(props.good + props.neutral + props.bad))*100} text="positive"/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood => {
    setGood(newGood)
  }

  const setToNeutral = newNeutral => {
    setNeutral(newNeutral)
  }

  const setToBad = newBad => {
    setBad(newBad)
  }

  return (
    <div>
      <SectionTitle text="give feedback"/>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <SectionTitle text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App