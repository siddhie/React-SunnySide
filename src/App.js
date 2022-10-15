import "./App.css";
import Lichisection from "./Components/Lichisection";
import Eggsection from "./Components/Eggsection";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Cupsection from "./Components/Cupsection";
import Testimonial from "./Components/Testimonial";
import Fourimages from "./Components/Fourimages";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Eggsection />
      <Cupsection />
      <Lichisection />
      <Testimonial />
      <Fourimages />
      <Footer />
    </div>
  );
}

export default App;
