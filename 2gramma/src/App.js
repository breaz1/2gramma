import Header from "./components/Header";
import SelectDialog from "./components/selectDialog";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Container className="d-flex gap-10 ">
          <SelectDialog />
          <div>
            info
          </div>
        </Container>    
      </main>
    </div>
  );
}

export default App;
