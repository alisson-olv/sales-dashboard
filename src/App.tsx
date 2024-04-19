import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Resume from "./pages/resume";

function App() {

  return (
    <div className="container">
      <Sidenav />

      <main>
        <Header />
        <Resume />
      </main>
    </div>
  )
}

export default App
