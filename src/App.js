// import logo from './logo.svg';
import Nav from "./nav";
import "./App.css";
import Header from "./header";
import Card from "./card";
import Portfolio from "./portfolio";
import Portfolio2 from "./portfolio2";
import Portfolio3 from "./portfolio3";
import Portfolio4 from "./portfolio4";
import Cards from "./cards";
import Contact from "./contact";
import Footer from "./footer";


function App() {
  return (
    <div>
      <Nav />
      <Header/>
      <Card />
      <Portfolio />
      <Portfolio2 />
      <Portfolio3 />
      <Portfolio4 />
      <Cards />
      <Contact />
      <Footer />
      


    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil hic aspernatur itaque rerum velit eum ipsam quos molestias placeat.</p>
    //   </header>
    // </div>
  );
}

export default App;
