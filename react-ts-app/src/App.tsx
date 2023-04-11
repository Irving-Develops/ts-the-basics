import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'


function App() {
  const personName = {
    first: 'Clark',
    last: 'Kent'
  }

  const nameList = [{first: 'Bruce', last: 'Wayne'}, {first: 'Diana', last: 'Prince'}, {first: 'Barry', last: 'Allen'}]

  return (
    <div className="App">
      <Greet name="Irving" messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="online"/>
      <Heading> hello</Heading>
    </div>
  )
}

export default App
