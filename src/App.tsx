import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Resume from "./pages/resume";
import Sale from "./pages/sale";
import Sales from "./pages/sales";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidenav />

        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sale/:id" element={<Sale />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
