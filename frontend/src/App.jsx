import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorite";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./Contexts";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
<Footer />
    </>
  );
}

export default App;
