import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Resume from "./pages/resume";
import Sales from "./pages/sales";

function App() {

  return (
    <div className="container">
      <Sidenav />

      <main>
        <Header />
        <Resume />
        <Sales />
      </main>
    </div>
  )
}

export default App
