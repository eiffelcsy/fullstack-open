import { useState } from 'react'

const NextButton = (props) => (
  <button onClick={props.handleClick}>
    next anecdote
  </button>
)

const VoteButton = (props) => (
  <button onClick={props.handleClick}>
    vote
  </button>
)

const DisplayVotes = (props) => (
  <div>
    <p>has {props.votes} votes</p>
  </div>
)

const MostVotes = (props) => {
  let mostVotesNum = props.votesArray[0]
  let mostVotesIndex = 0

  for (const [index, element] of props.votesArray.entries()){
    if (element > mostVotesNum) {
      mostVotesNum = element
      mostVotesIndex = index
    }
  }

  return (
    <div>
      <p>{props.anecdotes[mostVotesIndex]}</p>
      <p>has {mostVotesNum} votes</p>
    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votesArray = Array(anecdotes.length).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesArray)

  const setToSelected = newSelected => {
    console.log(newSelected)
    setSelected(newSelected)
  }

  const setToVotes = (index) => {
    const copyVotesArray = [ ...votes ]
    copyVotesArray[index] += 1
    setVotes(copyVotesArray)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <DisplayVotes votes={votes[selected]}/>
      <VoteButton handleClick={() => setToVotes(selected)}/>
      <NextButton handleClick={() => setToSelected(Math.floor(Math.random() * (anecdotes.length)))}/>
      <h1>Anecdote with most votes</h1>
      <MostVotes votesArray={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App