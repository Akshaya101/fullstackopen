import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Course from './courseinfo/Course'
import Unicafe from './unicafe/Unicafe'
import Anecdotes from './anecdotes/anecdotes'


function App() {
  return (
    <div>
      {/* <Course /> */}
      {/* <Unicafe /> */}
      <Anecdotes />
    </div>
  )
}

export default App

//  Refactor the code so that it consists of three new components: Header, Content, and Total.All data still resides in the App component, which passes the necessary data to each component using props.Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

// Define the new components in the file App.jsx.