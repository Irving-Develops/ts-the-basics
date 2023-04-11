import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";

function App() {
  const personName = {
    first: "Clark",
    last: "Kent",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Diana", last: "Prince" },
    { first: "Barry", last: "Allen" },
  ];

  return (
    <div className="App">
      <Greet name="Irving" messageCount={21} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="online" />
      <Heading> hello</Heading>
      <Button handleClick={(e, id) => console.log("clicked", e, id)} />
      <Input value="" handleChange={(e) => console.log(e)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
