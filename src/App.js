import Header from './Components/Header/index'
import React from "react";
import Body from "./Components/Body";
import Container from "./Components/GlobalComponents/Container";

function App() {
  return (
    <div className="App">
        <Body>
            <Container>
                <Header />
            </Container>
        </Body>
    </div>
  );
}

export default App;
