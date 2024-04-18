import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Resume from "./pages/resume";

function App() {

  return (
    <>
      <Sidenav />

      <main>
        <Header />
        <Resume />
      </main>
    </>
  )
}

export default App
