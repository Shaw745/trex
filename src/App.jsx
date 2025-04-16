import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import Rent from "./components/Rent";
import Review from "./components/Review";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <div className="hero h-screen max-h-[689px] bg-no-repeat bg-cover">
        <Nav />
        <Hero />
      </div>
      <Experience />

      <Featured />

      <Howitworks />
      <Review />
      <Rent />
      <Footer />
    </>
  );
}

export default App;
