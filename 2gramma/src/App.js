import Header from "./components/Header";
import SelectDialog from "./components/selectDialog";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-600 to-gray-800 h-screen">
      <main>
      <Header />
        <Container className="bebeb justify-between gap-10 h-full">
          <SelectDialog />
          <div className="rounded-3xl d-flex flex-column w-full justify-between gap-4">
              <div className=" h-[70vh] lg:h-96">
                  <h1>asdasdas</h1>
              </div>
              <div className="d-flex  gap-3">
                <input className="w-full bg-white rounded-3xl" />
                <button className=" bg-white rounded-full p-3"><img className="text-white" src="./sendIcon.svg" alt="отправить сообщение"/></button>
              </div>      
          </div>
        </Container>    
      </main>
    </div>
  );
}

export default App;
