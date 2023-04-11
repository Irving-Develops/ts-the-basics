import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'


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
    </div>
  )
}

export default App
