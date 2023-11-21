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
        <Container className="d-flex gap-10 h-full">
          <SelectDialog />
          <div className="border rounded-3xl d-flex flex-column w-full justify-between">
              <div className="">

              </div>
              <div className="d-flex">
                <input className="w-full" />
                <button className=" bg-blue-500">asd</button>
              </div>      
          </div>
        </Container>    
      </main>
    </div>
  );
}

export default App;
